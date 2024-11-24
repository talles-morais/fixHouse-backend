import express from "express"
import * as serviceController from "../controllers/service.controller"

const router = express.Router()

router.post("/service", serviceController.createService)
router.get("/services", serviceController.getAllServices)
router.get("/service/:id", serviceController.getServicesById)
router.get("/service", serviceController.getServicesByClientId)

export default router