import multer from "multer";

export const storage = multer.diskStorage({
    destination: function (Req, File, cb) {
        cb(null, 'uploads/');
    },
    filename: function(Req, File, cb) {
        const splitExtension = File.originalname.split('.');
        console.log(splitExtension);
        const extension = `.${splitExtension[1]}`;
        cb(null, `${splitExtension[0]} ${Date.now()}${extension}`);
    }
})

export default storage;