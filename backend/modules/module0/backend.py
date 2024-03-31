# - calculate size and range of the image data if not added 
# - convert uploaded images to .npy format – for processing further – save this file and display to the user as well in design.py
# - receive input from module0.jsx 
# - when submit button is triggered - send data to integration.py
# - send display information to design.py 

import numpy as np;
from fastapi import File, UploadFile
from .integration import save_to_valid_module

#  when submit is clicked converts image file into numpy array and saves the image in database - sends the data to integration.py
async def process_image(module_name, file: UploadFile = File(...)):
    try:
        image_bytes = await file.read()
        # Convert image bytes to a NumPy array
        image_array = np.frombuffer(image_bytes, dtype=np.uint8)

        # Call the integration function to save the image array to a valid module
        result = save_to_valid_module(module_name, image_array)
        return result
    except Exception as e:
        return {"error": str(e)}
