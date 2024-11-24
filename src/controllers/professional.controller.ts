import { Request, Response } from "express"
import * as professionalService from "../services/professionalService"

export const createProfessional = async (req: Request, res: Response) => {
  const { name, email, specialty, password } = req.body

  try {
    const user = await professionalService.createProfessional(name, email, specialty, password);
    res.status(201).json(user)
  } catch (error) {
    res.status(404).json({ message: "error creating user", error })
  }
}

export const getAllProfessionals= async (req: Request, res: Response) => {
  try {
    const users = await professionalService.getAllProfessionals()
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ message: "error fetching users", error })
  }
}

export const getProfessionalById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const professional = await professionalService.getProfessionalById(Number(id))
    if(!professional) {
      res.status(404).json({ message: "user not found" })
    }
    res.status(200).json(professional)
  } catch (error) {
    res.status(400).json({ message: "error fetching user", error })
  }
}