import numpy as np
# import cv2
import matplotlib.pyplot as plt

def noise_data(noise_arr, min_val, max_val):
    global noise_arr1
    global min1
    global max1
    noise_arr1 = noise_arr
    min1 = min_val
    max1 = max_val

def model_noise(noise_type: str):
    global noise_arr1
    global min1
    global max1
    if noise_type == "Gaussian Noise":
        row, col = noise_arr1.shape
        mean = 0
        var = 0.1
        sigma = var ** 0.5
        gaussian = np.random.normal(mean, sigma, (row, col))
        noise_arr1 = noise_arr1 + gaussian
        # plt.imshow(noise_arr1, 'gray')
        # plt.show()

        from .integration import save_processed_noise_arr
        save_processed_noise_arr(noise_arr1)

        return {"message": "Gaussian noise added to the image"}
