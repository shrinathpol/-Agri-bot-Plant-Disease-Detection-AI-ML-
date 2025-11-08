import random

# A list of possible disease predictions
DISEASE_PREDICTIONS = [
    {"disease": "Healthy", "confidence": "98%", "recommendation": "No action needed. Your plant appears to be healthy."},
    {"disease": "Powdery Mildew", "confidence": "92%", "recommendation": "Treat with a fungicide. Ensure good air circulation."},
    {"disease": "Rust", "confidence": "85%", "recommendation": "Remove infected leaves. Avoid overhead watering."},
    {"disease": "Leaf Spot", "confidence": "89%", "recommendation": "Apply a copper-based fungicide. Rake and destroy fallen leaves."},
    {"disease": "Downy Mildew", "confidence": "95%", "recommendation": "Improve air circulation and reduce humidity. Apply a targeted fungicide."},
]

def detect_disease(image_bytes: bytes):
    """
    A dummy function to simulate plant disease detection.
    
    In a real application, this function would contain a trained machine learning
    model to analyze the image. For this prototype, it selects a prediction
    based on the size of the image bytes to ensure consistent results for the same image.
    """
    # Use the length of the byte array to deterministically select a prediction.
    # This makes the "prediction" consistent for the same uploaded image.
    index = len(image_bytes) % len(DISEASE_PREDICTIONS)
    return DISEASE_PREDICTIONS[index]
