import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [statistics, setStatistics] = useState({ dailyDeaths: 0, totalCases: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setStatistics({
      dailyDeaths: 1600,  
      totalCases: 125070, 
    });
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file before uploading.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPrediction(response.data.predicted_class);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('There was an error uploading the file. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="proj-heading">PulmoPredict</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#pulmo-care">PulmoPredict</a></li>
            <li><a href="#about-lung-cancer">About Lung Cancer</a></li>
            <li><a href="#about-model">About the Model</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
          </ul>
        </nav>
      </header>


      <section id="home">
        <h2>Upload CT-Scan Image</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={loading}>
          {loading ? 'Uploading...' : 'Upload and Predict'}
        </button>
        {prediction && <p>Predicted Class: {prediction}</p>}
      </section>


      <section id="pulmo-care">
        <h2>PulmoPredict</h2>
        <p>PulmoPredict is an initiative dedicated to improving the early detection and treatment of lung diseases, particularly lung cancer. 
          By harnessing the power of artificial intelligence and machine learning, PulmoPredict provides healthcare professionals with the tools they need to make informed decisions. 
          Our mission is to reduce the mortality rate associated with lung cancer by offering reliable, efficient, and accessible diagnostic solutions.
          PulmoPredict is not just a technology; it's a commitment to enhancing patient care and saving lives.
           </p>
           <a className='pp'>In result if negative then the output will be positive or else it will classify cancer into adenocarcinoma, large 
            cell carcinoma, squamous cell carcinoma</a>
      </section>
      
      <section id="about-lung-cancer">
        <h2>About Lung Cancer</h2>
        <p>Lung cancer is the leading cause of cancer deaths worldwide, accounting for nearly 1.8 million deaths annually. It's a devastating disease that affects millions of people globally, with a five-year survival rate of only 21%. Early detection is crucial to improve treatment outcomes and increase survival rates. In fact, the survival rate can increase up to 55% if lung cancer is detected at an early stage. Unfortunately, most cases are diagnosed at an advanced stage, making treatment more challenging. The importance of early detection cannot be overstated, and PulmoPredict aims to contribute to this effort by providing accurate and timely predictions, ultimately helping to save lives.</p>
      </section>

      <section id="about-model">
        <h2>About the Prediction Model</h2>
        <p>This model uses advanced machine learning techniques to analyze CT-Scan images and predict the likelihood of lung cancer. The model is trained on a large dataset of labeled X-ray images to identify patterns and anomalies associated with lung cancer. It leverages deep learning algorithms, specifically convolutional neural networks (CNNs), to process and analyze the images. The goal is to assist medical professionals in making quicker and more accurate diagnoses, potentially improving patient outcomes through earlier intervention.</p>
      </section>

      

      <section id="dashboard">
        <h2>Dashboard</h2>
        <div className="statistics">
          <div className="stat">
            <h3>Daily Deaths</h3>
            <p>{statistics.dailyDeaths}*</p>
          </div>
          <div className="stat">
            <h3>Total Cases</h3>
            <p>{statistics.totalCases}</p>
            <p>as of 2024</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 PulmoPredict. Made for MediHacks. By Lakshmi Sahithi.</p>
      </footer>
    </div>
  );
}

export default App;
