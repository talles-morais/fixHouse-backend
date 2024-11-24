import { Request, Response } from "express"
import * as serviceService from "../services/serviceService"

export const createService = async (req: Request, res: Response) => {
  const { name, clientId, professionalId, value, date, description  } = req.body

  console.log(req.body);

  try {
    const service = await serviceService.createService(clientId, professionalId, value, name, description, date);
    res.status(201).json(service)
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: "error creating service", error })
  }
}

export const getAllServices= async (req: Request, res: Response) => {
  try {
    const services = await serviceService.getAllServices()
    res.status(200).json(services)
  } catch (error) {
    res.status(400).json({ message: "error fetching services", error })
  }
}

export const getServicesByClientId = async (req: Request, res: Response) => {
  const { clientId } = req.body

  try {
    const services = await(serviceService.getServiceByClientId(Number(clientId)))
    res.status(200).json(services)
  } catch (error) {
    res.status(400).json({ message: "" })
  }
}

export const getServicesById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const service = await serviceService.getServiceById(Number(id))
    if(!service) {
      res.status(200).json({ message: "service not found" })
    }
  } catch (error) {
    res.status(400).json({ message: "error fetching service", error })
  }
}