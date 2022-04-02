const xExpress = require ('express');
const multer = require('multer');
const path = require('path');

const router = xExpress.Router();

const disktorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
        cb(null, Date.now()+ "monkeywit" +file.originalname);
    }
});
const fileUpload = multer({
    storage: disktorage,
}).single('image');

router.get('/',(req,res) => {
    res.send('Hello World');
})

router.post('/images/post', fileUpload ,(req,res) => {
    console.log(req.files);
    res.send('Hello World');
})

module.exports = router;