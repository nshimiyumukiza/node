
import express from "express"
import UserController from "../controller/userController"

const router = express.Router()

router.post("/signup",UserController.Sigup)
router.get("/",UserController.getUsers)
router.delete("/",UserController.deleteUser)

export default router