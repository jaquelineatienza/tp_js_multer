import multer, { diskStorage } from "multer";

//controller to save the images
const save = diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    if (file !== null) {
      const ext = file.originalname.split(".").pop();
      cb(null, Date.now() + "." + ext);
    }
  },
});

//filter
const filter = (req, file, cb) => {
  if (
    file &&
    (file.mimetype === "image/jpeg" || file.mimetype === "image/png")
  ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPG and PNG are allowed."), false);
  }
};

export const saveImg = multer({ storage: save, fileFilter: filter });
