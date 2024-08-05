import express from "express";
import { contact } from "../controller/contactModel.js";

const router = express.Router()

router.post("/", contact)


export default router