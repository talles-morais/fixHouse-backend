import express from "express"
import * as professionalController from "../controllers/professional.controller"

const router = express.Router()

router.post("/professional", professionalController.createProfessional)
router.get("/professionals", professionalController.getAllProfessionals)
router.get("/professional/:id", professionalController.getProfessionalById)

export default router