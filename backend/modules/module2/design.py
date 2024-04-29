from PIL import Image
import io
import base64
import numpy as np

def numpy_array_to_image(array):
    array_normalized = ((array - array.min()) / (array.max() - array.min()) * 255).astype(np.uint8)
    
    image = Image.fromarray(array_normalized)

    img_byte_array = io.BytesIO()
    image.save(img_byte_array, format="PNG")
    img_byte_array.seek(0)
    
    encoded_img = base64.b64encode(img_byte_array.read()).decode()
    
    return encoded_img