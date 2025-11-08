# Agri-bot Plant Disease Detection

This project is a web-based tool for detecting diseases in plant leaves.

**Frontend:** React (TypeScript)
**Backend:** FastAPI (Python)

---

## Project Setup and Execution

To run this application, you need to start both the backend server and the frontend development server. Follow the steps below.

### Prerequisites

-   Node.js and npm (for the frontend)
-   Python and pip (for the backend)

### 1. Backend Setup (Python FastAPI)

First, set up and run the backend server.

```bash
# 1. Navigate to the backend directory
cd backend

# 2. (Recommended) Create and activate a virtual environment
python -m venv venv
# On Windows
venv\Scripts\activate
# On macOS/Linux
# source venv/bin/activate

# 3. Install the required Python packages
pip install -r requirements.txt

# 4. Start the backend server
# The server will be running at http://127.0.0.1:8000
uvicorn main:app --reload
```

Leave this terminal running.

### 2. Frontend Setup (React)

In a **new terminal**, set up and run the frontend application.

```bash
# 1. Navigate to the frontend directory
cd frontend

# 2. Install the required npm packages
npm install

# 3. Start the React development server
# The application will open automatically in your browser at http://localhost:3000
npm start
```

### How to Use the Application

1.  Once the frontend server is running, your browser should open to `http://localhost:3000`.
2.  Click the upload area to select an image of a plant leaf from your computer.
3.  Click the "Detect Disease" button.
4.  The application will display the analysis result from the AI model, including the detected disease, a confidence score, and a recommended course of action.
# -Agri-bot-Plant-Disease-Detection-AI-ML-
# -Agri-bot-Plant-Disease-Detection-AI-ML-
