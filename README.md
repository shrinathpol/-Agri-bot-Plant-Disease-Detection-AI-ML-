# Agri-bot: AI-Powered Plant Disease Detection

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A project that leverages computer vision and machine learning to identify common diseases in plants from leaf images. This repository contains the AI/ML model, training scripts, and a web application for inference.

---

## 📖 Table of Contents

* [About The Project](#about-the-project)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [System Architecture](#system-architecture)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Acknowledgments](#acknowledgments)

---

## 🤖 About The Project

In agriculture, early detection of plant diseases is critical for preventing crop loss. Manually monitoring large farms is time-consuming and prone to human error.

This project aims to solve that problem by creating an automated system. It uses a **Convolutional Neural Network (CNN)**—or a **YOLO (You Only Look Once)** model—to analyze images of plant leaves and accurately identify diseases. The "Agri-bot" concept represents the hardware (like an ESP32-based rover) that would carry the camera, while this repository holds the "brain" (the AI model) that processes the images.

---

## ✨ Features

* **High-Accuracy AI Model:** Trained on a public dataset () to identify multiple diseases ().
* **Web Interface:** A simple web app (built with **Flask**) to upload a leaf image and get an instant prediction.
* **Scalable:** The model can be re-trained with new data to improve accuracy or add new plant types.
* **Hardware-Ready:** The inference logic can be adapted to run on edge devices (like an ESP32-CAM or Raspberry Pi) for a real-world bot implementation.

---

## 🛠️ Tech Stack

This project is built with the following technologies:

### AI & Machine Learning
* **Python 3.9+**
* **TensorFlow** or **PyTorch:** For building and training the deep learning model.
* **OpenCV:** For image pre-processing.
* **Scikit-learn:** For splitting data and evaluating model performance.
* **Jupyter Notebook:** For model experimentation and prototyping.

### Web Application
* **Flask:** A lightweight Python framework for the web server.
* **HTML/CSS/JavaScript:** For the front-end user interface.

### (Optional) Hardware Concept
* **ESP32-CAM / Arduino:** For image capture and controlling the bot.
* **LoRa / Wi-Fi:** For transmitting image data from the bot to the server.

---

## Diagram System Architecture

**Conceptual Flow:**
1.  **Image Capture:** The user uploads an image via the web app (or an Agri-bot captures it in the field).
2.  **Pre-processing:** The image is resized, normalized, and formatted for the model.
3.  **AI Model Inference:** The processed image is fed into the trained CNN/YOLO model.
4.  **Prediction:** The model outputs a probability score for each disease class.
5.  **Display Results:** The web app displays the most likely disease (and a confidence score) to the user.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You must have **Python 3.9** (or newer) and **pip** installed.

* **Python:** `https://www.python.org/downloads/`
* **Git:** `https://git-scm.com/downloads`

### Installation

1.  **Clone your fork:**
    ```bash
    git clone [https://github.com/shrinathpol/-Agri-bot-Plant-Disease-Detection-AI-ML-.git](https://github.com/shrinathpol/-Agri-bot-Plant-Disease-Detection-AI-ML-.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd -Agri-bot-Plant-Disease-Detection-AI-ML-
    ```
3.  **Create a virtual environment:** (Recommended)
    ```bash
    # For Windows
    python -m venv venv
    .\venv\Scripts\activate

    # For macOS/Linux
    python3 -m venv venv
    source venv/bin/activate
    ```
4.  **Install the required libraries:**
    ```bash
    pip install -r requirements.txt
    ```
5.  **Download the trained model:**
    > **Note:** You may need to download the pre-trained model file.
    > [Link to download model file]

---

## 🏃 Usage

### 1. To Run the Web Application:

1.  Run the Flask app:
    ```bash
    flask run
    # or
    python app.py
    ```
2.  Open your web browser and go to:
    `http://127.0.0.1:5000`

3.  Upload an image of a plant leaf and click "Predict".

### 2. To Train the Model (Optional):

1.  Organize your dataset in the `data/` folder.
    2.  Run the training script:
    ```bash
    python train.py
    ```
3.  The new model will be saved in the `models/` directory.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place. Any contributions you make are **greatly appreciated**.

This project was originally forked from `vidyashreesh9/Agri-bot-Plant-Disease-Detection-AI-ML`.

If you have a suggestion that would make this better, please fork the repo and create a pull request.
1.  **Fork** the Project (`https://github.com/shrinathpol/-Agri-bot-Plant-Disease-Detection-AI-ML-/fork`)
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a **Pull Request**

---

## 📄 License

Distributed under the MIT License. See `LICENSE.txt` for more information.

---

## 🙏 Acknowledgments

* **Shrinath Pol** - *Project Developer*
* **vidyashreesh9** - *Original Repository Owner*
* **PlantVillage Dataset** - *For the training data*
* **Readme Template:** [othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template)
