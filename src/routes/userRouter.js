
import express from "express"
import UserController from "../controller/userController"
import DatorChecker from "../midleware/dataerChecker"

const router = express.Router()

router.post("/signup",DatorChecker.userResterIsEmpty,DatorChecker.UserExist,UserController.Sigup)
router.get("/",UserController.getUsers)
router.delete("/",UserController.deleteUser)
router.get("/:id",UserController.getUserById)
router.delete("/:id",UserController.deleteUserById)

export default router