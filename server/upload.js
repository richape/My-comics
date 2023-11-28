import multer from 'multer'
import path from 'path'

// Define storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const destination = path.resolve(__dirname, '../../public/images')
    callback(null, destination) // Destination folder for uploaded files
  },
  filename: function (req, file, callback) {
    const uniqueFilename = `${Date.now()}-${file.originalname}`
    // Generate a unique filename for the uploaded file
    callback(null, uniqueFilename)
  },
})

// Initialize multer with the storage configuration
const upload = multer({ storage: storage })

export default upload
