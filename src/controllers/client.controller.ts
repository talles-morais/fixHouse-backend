import { Request, Response } from "express"
import * as clientService from "../services/clientService"

export const createClient = async (req: Request, res: Response) => {
  const { name, email, password } = req.body

  try {
    const user = await clientService.createClient(name, email, password);
    res.status(200).json(user)
  } catch (error) {
    res.status(200).json({ message: "error creating user", error })
  }
}

export const loginClient = async (req: Request, res: Response) => {
  const { email, password } =  req.body

  try {
    const user = await clientService.getUserByEmail(email)
    if( user && user.password === password){
      res.status(200).json({ message: "login successfull", userId: user.id })
    } else {
      res.status(403).json({ message: "user or password incorrect" })
    }
  } catch (error) {
    res.status(404).json({message: "user not found"})
  }
}

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await clientService.getAllUsers()
    res.status(200).json(users)
  } catch (error) {
    res.status(200).json({ message: "error fetching users", error })
  }
}

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const client = await clientService.getUserById(Number(id))
    if(!client) {
      res.status(200).json({ message: "user not found" })
    }
  } catch (error) {
    res.status(200).json({ message: "error fetching user", error })
  }
}