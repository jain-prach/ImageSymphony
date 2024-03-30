
## Folder Structure

project_root/
|   backend/                          # Backend directory
|   |   modules/                      # Modules directory
|   |   |   module0/                  # Module 0 directory
|   |   |   |   backend.py            # Backend logic for Module 0
|   |   |   |   design.py             # Design phase logic for Module 0
|   |   |   |   frontend.py           # Frontend logic for Module 0
|   |   |   |   integration.py        # Integration logic for Module 0
|   |   |   module1/                  # Module 1 directory
|   |   |   |   backend.py            # Backend logic for Module 1
|   |   |   |   design.py             # Design phase logic for Module 1
|   |   |   |   frontend.py           # Frontend logic for Module 1
|   |   |   |   integration.py        # Integration logic for Module 1
|   |   |   ...                       # Repeat for other modules - total = 6 -> till module 5
|   |   server.py                     # Backend server main file
|   data/                             # Data directory
|   docs/                             # Documentation directory
|   frontend/                         # Frontend directory
|   |   node_modules/                 # Node.js modules directory (created automatically)
|   |   public/                       # Public directory (contains index.html)
|   |   src/                          # Source directory
|   |   |   components/               # Components directory
|   |   |   |   About/                # About component directory
|   |   |   |   |   About.jsx         # About component JSX file
|   |   |   |   |   About.css         # About component CSS file
|   |   |   |   Header/               # Header component directory
|   |   |   |   |   Header.jsx        # Header component JSX file
|   |   |   |   |   Header.css        # Header component CSS file
|   |   |   |   Footer/               # Footer component directory
|   |   |   |   |   Footer.jsx        # Footer component JSX file
|   |   |   |   |   Footer.css        # Footer component CSS file
|   image_symphony_venv/              # Virtual environment directory

## Module 0: Image Input Processing

1. **Design Phase:**
    - Determine the image input type (e.g., .png, .npy, .tif, .bin, .jpg) and convert it to a numpy array.
    - Determine the size of the image using `img.shape`.
    - Determine the range of the image (e.g., 0-255, 0-2047, 0-65535) for accurate modeling of noise.
    - Consider requirements for grayscale and color images (different noise models may require different input formats).

2. **Frontend Phase:**
    - Implement an Image Upload User component with additional checks to only accept image formats (.png, .npy, .tif, .bin, .jpg).
    - Perform range checks on the uploaded image.
    - Provide user feedback for accepted image formats and correct uploading of the image.

3. **Backend Phase:**
    - Calculate the size of the image.
    - Check the number of channels.
    - Calculate the range of the image.
    - Convert the image to a numpy array based on the required input format and data range.

4. **Integration Phase:**
    - Pass the image to Module 3, 4, and 5 for further processing.
    - Verify that the image data is correctly transmitted and received by the subsequent modules.

## Module 1: Model Noise of a Particular Type

1. **Design Phase:**
    - Determine the types of noise to be modeled and the corresponding algorithms or techniques to be used.
    - Examples of noise types: Gaussian noise, Salt and pepper noise, Shot noise, Quantization noise, Film grain, Anisotropic noise, Periodic noise, Fixed Pattern noise, Speckle noise, Random noise.
    - Additional algorithms and information can be found at [Wikipedia - Image Noise](https://en.wikipedia.org/wiki/Image_noise), [CopyProgramming - Adding Gaussian Noise to Images using Python](https://copyprogramming.com/howto/insert-white-gaussian-nois-in-images-using-python), and [AskPython - Adding Noise to Images using OpenCV](https://www.askpython.com/python/examples/adding-noise-images-opencv).

2. **Frontend Phase:**
    - Select the type of noise to be added.

3. **Backend Phase:**
    - Develop algorithms or models to generate noise of the selected type based on the input images.

4. **Integration Phase:**
    - Connect with Module 2 to save the image noise file in the desired format specified by the user.
    - Connect with Module 3 to add the noise to other given images (with augmentation).

## Module 2: Output Image Processing

1. **Design Phase:**
    - Define the processing steps required for enhancing or restoring images with applied noise.
    - Adjust parameters if the image looks too unreal (not valid for bulk data download).
    - Save the file in the desired image format.

2. **Frontend Phase:**
    - Adjust parameters if needed.
    - Select the desired image format.

3. **Backend Phase:**
    - Save the image to the desired location.
    - Send the image back for processing to the desired Module (1, 3, 4, 5).

4. **Integration Phase:**
    - Integrate with all the modules.

## Module 3: Generate Noise on an Image

1. **Design Phase:**
    - Determine the noise intensity based on the image range from Module 0.
    - Add the noise to the user input image using basic addition.
    - Consider augmentation options such as flip, rotate, upsampling, and downsampling.

2. **Frontend Phase:**
    - Allow the user to select the type of noise modeled from Module 1.
    - Select augmentation options.

3. **Backend Phase:**
    - Add noise to the image in all specified augmentation formats.

4. **Integration Phase:**
    - Send the image to Module 2 for download.

## Module 4: Model Noise from an Image

1. **Design Phase:**
    - Determine the statistical or machine learning approaches to be used for modeling noise from input images.
    - Examples of approaches: Fourier Transform, Gaussian Elliptical Noise.
    - Further research is needed for more information.

2. **Frontend Phase:**
    - Select the method for modeling noise.
    - Provide additional required parameters.

3. **Backend Phase:**
    - Seamlessly integrate all the methods, ensuring independence from each other.

4. **Integration Phase:**
    - Integrate with Module 2 for download and Module 5 for generating noise on another image.

## Module 5: Generate Modeled Noise on an Image

1. **Design Phase:**
    - Consider augmentation techniques.
    - If the image is too deteriorated and unable to identify original patterns, redo the process.
    - Add modeled noise to another clear image using basic addition.

2. **Frontend Phase:**
    - Select from the modeled noises generated from Module 4.
    - Select augmentation options.

3. **Backend Phase:**
    - Add noise and image in all specified augmentation formats.

4. **Integration Phase:**
    - Send the image to Module 2 for download.


using FARM stack - FastAPI, ReactJS, MongoDB
