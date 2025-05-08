import { Router } from "express"
import { addFormController } from "../controllers/form.controller"

const formRouter = Router()

formRouter.post("/user/form", addFormController)

export default formRouter
