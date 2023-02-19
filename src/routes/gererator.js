import { Router } from "express";
import {GenerateCode} from './../controllers/generate.js'
const router = Router()



// Create a new project
router.post('/', GenerateCode);





export default router