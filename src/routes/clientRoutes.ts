import express from "express"
import * as clientController from "../controllers/client.controller"

const router = express.Router()

router.post("/client", clientController.createClient)
router.post("/login",clientController.loginClient)
router.get("/clients", clientController.getAllUsers)
router.get("/client/:id", clientController.getUserById)

export default router