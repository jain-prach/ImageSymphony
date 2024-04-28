# - calculate size and range of the image data if not added 
# - convert uploaded images to .npy format – for processing further – save this file and display to the user as well in design.py
# - receive input from module0.jsx 
# - when submit button is triggered - send data to integration.py
# - send display information to design.py 

import numpy as np;
from fastapi import File, UploadFile
from .integration import save_img_to_valid_module, save_noise_to_valid_module, save_file_type_to_valid_module
from PIL import Image
import io
import numpy as np
import logging

logging.basicConfig(filename='app.log', level=logging.DEBUG)

#  when submit is clicked converts image file into numpy array and saves the image in database - sends the data to integration.py

def process_image_into_array(module_name: str, file: UploadFile = File(...)):
    try:
        filename, extension = file.filename.split(".")
        if extension.lower() in ['npy', 'bin']:
            img_arr = np.load(io.BytesIO(file.read()))
        else:
            image = Image.open(io.BytesIO(file.read()))
            img_arr = np.array(image)
        save_img_to_valid_module(module_name, img_arr, filename)
        return 
    except Exception as e:
        raise e
    
def process_all_zero_array(module_name, width, height, min, max):
    try:
        noise_array = np.zeros((height, width))
        save_noise_to_valid_module(module_name, noise_array, min, max)
        return 
    except Exception as e:
        raise e

def save_type(module_name: str, type: str):
    try:
        save_file_type_to_valid_module(module_name, type)
        return
    except Exception as e:
        raise e