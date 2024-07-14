import os
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from PIL import Image

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Define the label_to_int dictionary to map class labels to integers
label_to_int = {
    "adenocarcinoma": 0,
    "large Cell carcinoma": 1,
    "normal": 2,
    "squamous.cell.carcinoma": 3
}
int_to_label = {v: k for k, v in label_to_int.items()}

# Load the fine-tuned VGG19 model
model_path = os.path.join('model', 'my_fine_tuned_model.h5')
fine_tuned_model = load_model(model_path)

# Function to preprocess the input image
def preprocess_input_image(image, input_shape):
    image = Image.open(image)
    image = image.resize(input_shape)
    image = img_to_array(image)
    image = image.astype('float32') / 255.0
    image = np.expand_dims(image, axis=0)
    return image

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    input_shape = (224, 224)  # VGG19 model input dimensions
    input_image = preprocess_input_image(file, input_shape)

    # Use the fine-tuned VGG19 model to predict the class of the input image
    predictions = fine_tuned_model.predict(input_image)
    predicted_label = int_to_label[np.argmax(predictions)]

    return jsonify({'predicted_class': predicted_label})

if __name__ == '__main__':
    app.run(debug=True)
