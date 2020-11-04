import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
  return res.status(200).json({ message: "Token é valido!" });
});

export default router;
