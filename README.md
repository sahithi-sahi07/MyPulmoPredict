# PulmoPredict

PulmoPredict is a deep learning-based web application designed to assist in the early detection of lung cancer. By analyzing CT scan images, the application classifies them into different categories: adenocarcinoma, large cell carcinoma, squamous cell carcinoma, or normal.

## Table of Contents

- [Inspiration](#inspiration)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Challenges](#challenges)
- [Accomplishments](#accomplishments)
- [What I Learned](#what-i-learned)
- [Future Plans](#future-plans)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Inspiration

The inspiration for PulmoPredict stemmed from the high rates of lung cancer worldwide and the urgent need for early detection. In regions with limited access to specialized healthcare, many patients are diagnosed too late. By leveraging advanced machine learning, PulmoPredict aims to provide a tool that assists doctors in identifying lung cancer early, ultimately saving lives and making healthcare more accessible.

## Features

- **Image Upload**: Upload CT scan images for analysis.
- **Cancer Prediction**: Predicts and classifies lung cancer types.
- **Real-Time Dashboard**: Displays statistics on lung cancer cases and outcomes.
- **User-Friendly Interface**: Simple and intuitive interface for easy navigation.

## Tech Stack

- **Frontend**: React.js, HTML, CSS
- **Backend**: Flask, node js (Not uploaded due to size constraints)
- **Database**: SQLite
- **Machine Learning**: TensorFlow, Python (Trained model uploaded)

##Note: The backend and the trained model are not included in the repository due to size constraints. Please contact me for access to these components. ##

## Installation

To set up PulmoPredict locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/PulmoPredict.git
    ```
2. Navigate to the project directory:
    ```bash
    cd PulmoPredict
    ```
3. Install the necessary dependencies for the frontend:
    ```bash
    cd frontend
    npm install
    ```
4. Start the frontend development server:
    ```bash
    npm start
    ```



## Usage

1. Navigate to `http://localhost:3000` in your web browser.
2. Upload a CT scan image of the chest.
3. Click on the "Upload and Predict" button.
4. View the prediction results displayed on the screen.

## Challenges

- **Data Quality**: Ensuring clean and representative training data.
- **Model Accuracy**: Improving initial model performance through extensive experimentation.
- **Integration**: Seamlessly integrating the ML model with the frontend and backend.
- **Scalability**: Handling multiple users and large image files efficiently.

## Accomplishments

- Achieved high prediction accuracy for lung cancer detection.
- Developed a user-friendly interface for easy navigation and use.
- Implemented a real-time dashboard for displaying lung cancer statistics.
- Completed the project within a short timeframe, demonstrating effective time management and technical skills.

## What I Learned

- **Model Optimization**: Techniques such as data augmentation and transfer learning were crucial in improving model performance.
- **Full-Stack Development**: Building a cohesive application required integrating front-end and back-end technologies seamlessly.
- **API Integration**: Effectively using APIs to enhance functionality and provide additional insights to users.
- **User Experience**: Ensuring a smooth and intuitive user experience is paramount for the adoption of health tech solutions.

## Future Plans

- **Global Deployment**: Hosting the application on a scalable server to make it accessible to healthcare providers worldwide.
- **Enhanced Features**: Adding capabilities to detect other lung conditions and providing more detailed analysis.
- **Mobile Application**: Developing a mobile app to increase accessibility, allowing users to get predictions on the go.
- **Collaboration with Healthcare Institutions**: Partnering with hospitals and clinics to integrate PulmoPredict into their diagnostic processes, ensuring more patients benefit from early detection.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.

## License

This project is licensed under the MIT License.

## Contact

For any questions or inquiries, please contact me at [sahithianala2003@gmail.com](mailto:sahithianala2003@gmail.com).
