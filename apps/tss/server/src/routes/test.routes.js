import express from "express";
import { CloudinaryService } from "@shared/cloudinary/service";
import { upload } from "@shared/cloudinary/multer";

const router = express.Router();

// test routes
router.get("/ping", (req, res) => {
  res.json({ msg: "pong" });
});

// test cloudinary upload
router.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const result = await CloudinaryService.uploadFile(req.file, "user");
  res.json({
    message: "Upload success",
    url: result.secure_url,
    public_id: result.public_id,
    resource_type: result.resource_type,
  });
});

router.get("/url-cloudinary", (req, res) => {
  const signedUrl = CloudinaryService.generateSignedUrl("images/user/1763474508667_tlb8r6");
  res.json({ signedUrl });
});

// router.get("/auth", requireAuth, async (req, res) => {
//   res.status(200).json({ message: "Done" });
// });

export default router;
