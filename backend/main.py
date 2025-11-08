from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from ml_model import detect_disease

app = FastAPI(
    title="Agri-bot Plant Disease Detection API",
    description="An API to detect plant diseases from leaf images.",
    version="1.0.0",
)

# Configure CORS
origins = [
    "http://localhost:3000",  # The default port for React app
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", tags=["Root"])
async def read_root():
    """A simple endpoint to confirm the API is running."""
    return {"message": "Welcome to the Agri-bot API!"}

@app.post("/predict", tags=["Detection"])
async def predict_disease(file: UploadFile = File(...)):
    """
    Receives an image file, processes it with the ML model,
    and returns the disease prediction.
    """
    # Read the contents of the uploaded file
    image_bytes = await file.read()
    
    # Get a prediction from the dummy model
    prediction_result = detect_disease(image_bytes)
    
    return prediction_result

# A standard entry point for running the app
if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
