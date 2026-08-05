import os
import json
import urllib.request
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

def main():
    # URL for Student_Performance.csv
    url = "https://raw.githubusercontent.com/sumana-2705/Predicting-Student-Performance-Index/main/Student_Performance.csv"
    csv_path = "scripts/Student_Performance.csv"
    
    # Ensure scripts directory exists
    os.makedirs("scripts", exist_ok=True)
    
    print(f"Downloading dataset from {url}...")
    try:
        urllib.request.urlretrieve(url, csv_path)
        print("Download successful.")
    except Exception as e:
        print(f"Error downloading dataset: {e}")
        return

    # Load dataset
    print("Loading and preprocessing dataset...")
    df = pd.read_csv(csv_path)
    
    # Map features
    # 1. previousScore (Previous Scores range: 0-100, scale 0-1)
    df['previousScore_scaled'] = df['Previous Scores'] / 100.0
    
    # 2. studyHours (Hours Studied range: 1-9, scale 0-1 based on max of 40 in frontend)
    df['studyHours_scaled'] = df['Hours Studied'] / 40.0
    
    # 3. sleepHours (Sleep Hours range: 4-9, scale 0-1 using Gaussian-ish falloff)
    df['sleep_scaled'] = np.maximum(0.0, 1.0 - np.abs(df['Sleep Hours'] - 8.0) / 6.0)
    
    # 4. assignments (Sample Question Papers Practiced range: 0-9, mapped to percentage, scaled 0-1)
    df['assignments_scaled'] = (df['Sample Question Papers Practiced'] * 10.0) / 100.0
    
    # 5. participation (Extracurricular Activities: Yes/No, mapped to 8/10 or 5/10, scaled 0-1)
    df['participation_scaled'] = df['Extracurricular Activities'].apply(lambda x: 0.8 if x == 'Yes' else 0.5)
    
    # 6. attendance (Not present in dataset, synthesized from Performance Index with correlation)
    np.random.seed(42)  # For reproducibility
    noise = np.random.normal(0, 4.0, size=len(df))
    df['attendance'] = df['Performance Index'] * 0.8 + 20.0 + noise
    df['attendance'] = np.clip(df['attendance'], 0.0, 100.0)
    df['attendance_scaled'] = df['attendance'] / 100.0
    
    # Target variable (Performance Index range: 10-100, scale 0-1)
    y = df['Performance Index'] / 100.0
    
    # Feature matrix (must match keys needed in the frontend model-weights.json)
    features = [
        'previousScore_scaled',
        'attendance_scaled',
        'assignments_scaled',
        'studyHours_scaled',
        'participation_scaled',
        'sleep_scaled'
    ]
    X = df[features]
    
    print("Training Multiple Linear Regression model...")
    model = LinearRegression()
    model.fit(X, y)
    
    # Make predictions and calculate metrics
    y_pred = model.predict(X)
    r2 = r2_score(y, y_pred)
    mse = mean_squared_error(y, y_pred)
    
    print("\n--- Model Performance ---")
    print(f"R-squared (R2): {r2:.4f}")
    print(f"Mean Squared Error (MSE): {mse:.6f}")
    
    # Prepare weights JSON
    weights = {
        "intercept": float(model.intercept_),
        "previousScore": float(model.coef_[0]),
        "attendance": float(model.coef_[1]),
        "assignments": float(model.coef_[2]),
        "studyHours": float(model.coef_[3]),
        "participation": float(model.coef_[4]),
        "sleepHours": float(model.coef_[5])
    }
    
    print("\n--- Trained Weights & Intercept ---")
    for key, value in weights.items():
        print(f"  {key}: {value:.6f}")
        
    # Ensure destination directory exists
    os.makedirs("src/lib", exist_ok=True)
    weights_path = "src/lib/model-weights.json"
    
    with open(weights_path, 'w') as f:
        json.dump(weights, f, indent=2)
        
    print(f"\nSaved weights successfully to {weights_path}")

if __name__ == "__main__":
    main()
