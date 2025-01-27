
import express from "express"
import UserController from "../controller/userController"
import DatorChecker from "../midleware/dataerChecker"
import Validator from "../midleware/validation"
import VelifyAccess from "../midleware/velifiy"

const router = express.Router()

router.post("/signup",DatorChecker.userResterIsEmpty,Validator.userAcountRule(),Validator.validationRules,DatorChecker.UserExist,UserController.Sigup)
router.get("/",VelifyAccess("user"),UserController.getUsers)
router.delete("/",UserController.deleteUser)
router.get("/:id",UserController.getUserById)
router.delete("/:id",UserController.deleteUserById)
router.post("/login",UserController.Login)

export default router