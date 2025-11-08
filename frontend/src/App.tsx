import React, { useState, useCallback } from 'react';
import axios from 'axios';

// Define the structure of the API response
interface DetectionResult {
  disease: string;
  confidence: string;
  recommendation: string;
}

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setResult(null);
      setError(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDetect = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post<DetectionResult>('http://127.0.0.1:8000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data);
    } catch (err) {
      setError('Failed to get a result. Please ensure the backend server is running and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const UploadSection = () => (
    <div
      className="upload-section text-center"
      onClick={() => document.getElementById('fileInput')?.click()}
    >
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={handleFileChange}
        className="d-none"
      />
      <div className="upload-icon">🌿</div>
      <h5>Click to Upload an Image</h5>
      <p className="text-muted">Upload a clear image of a plant leaf.</p>
    </div>
  );

  return (
    <div className="container app-container">
      <div className="text-center">
        <h1 className="header-title">Agri-bot Plant Disease Detection</h1>
        <p className="header-subtitle">An AI-powered tool to help you identify plant diseases quickly.</p>
      </div>

      {preview ? (
        <div className="text-center mb-4">
          <img src={preview} alt="Selected leaf" className="image-preview" />
        </div>
      ) : (
        <UploadSection />
      )}

      <div className="d-grid gap-2 mt-4">
        <button 
          className="btn btn-success btn-lg" 
          onClick={handleDetect} 
          disabled={!selectedFile || isLoading}
        >
          {isLoading ? 'Analyzing...' : 'Detect Disease'}
        </button>
      </div>

      {isLoading && (
        <div className="text-center mt-4">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-4" role="alert">
          {error}
        </div>
      )}

      {result && (
        <div className="card results-card">
          <div className="card-body">
            <h4 className="card-title text-center">Detection Result</h4>
            <div className="row align-items-center">
              <div className="col-md-8">
                <p><strong>Disease:</strong> <span className="text-success fw-bold">{result.disease}</span></p>
                <p><strong>Confidence Score:</strong> {result.confidence}</p>
                <p><strong>Recommendation:</strong> {result.recommendation}</p>
              </div>
              {preview && (
                <div className="col-md-4 text-center">
                  <img src={preview} alt="Analyzed leaf" className="img-fluid result-image" />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
