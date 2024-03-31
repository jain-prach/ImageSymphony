# validate all inputs from user and display the information
# 1. Take image input from user - received in frontend.py and validated if image is uploaded or not then send to backend.py for conversion to numpy array
# 2. Take image size from user - integer input - 1024x1024, 1024x3600 - width and height  
# 3. Take image range from user - 0-2047, 0-255, etc - start and end
# 4. Take image type from user - .npy, .jpeg, .png, .jpg, etc - string strictly converting to lowercase and only accepting any of the determined types
# 5. display image input related information if image is added - collected from backend.py
# 6. apply submit button working - submit can only be triggered if all information is correct, if not then display error message - if correct then allow backend.py to send data to integration.py and display the information

import os

# validates the image and sends the output to frontend.py about successful upload - if not prints accepted file extensions for user in the frontend
ALLOWED_EXTENSIONS = {'npy', 'jpeg', 'jpg', 'png', 'bin'}

def validate_image(filename: str) -> str:
    return any(filename.endswith(ext) for ext in ALLOWED_EXTENSIONS)

