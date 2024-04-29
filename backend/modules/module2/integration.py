from pymongo import MongoClient
from pymongo.server_api import ServerApi
import numpy as np
import matplotlib.pyplot as plt

uri = "mongodb+srv://prachijain:kAcra3f4YNypqxWn@cluster0.1g1mls3.mongodb.net/?retryWrites=true&w=majority&appName=cluster0"
client = MongoClient(uri, server_api=ServerApi('1'))
db = client["ImageSymphony"]

collection = db['module3'] 

def processed_noise_arr_id(result_id: int):
    result = collection.find_one({"_id": result_id})
    processed_noise_arr_bson = result["processed_noise_array"]
    arr_shape = result["array_shape"]
    # processed_noise_arr = np.frombuffer(processed_noise_arr_bson, dtype=np.float64).reshape(arr_shape)
    # plt.imshow(processed_noise_arr, 'gray')
    # plt.show()
    # print(processed_noise_arr)
    from .frontend import processed_noise_arr
    return processed_noise_arr(processed_noise_arr_bson, arr_shape)