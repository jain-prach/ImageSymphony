from pymongo import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://prachijain:kAcra3f4YNypqxWn@cluster0.1g1mls3.mongodb.net/?retryWrites=true&w=majority&appName=cluster0"
client = MongoClient(uri, server_api=ServerApi('1'))
db = client["ImageSymphony"]

collection = db['module2'] 

def processed_noise_arr_id(result_id: int):
    result = collection.find_one({"_id": result_id})
    processed_noise_arr = result["processed_noise_array"]
    from .frontend import display_processed_noise_arr
    return display_processed_noise_arr(processed_noise_arr)