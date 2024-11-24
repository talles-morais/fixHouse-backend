import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const createProfessional = async (name: string, email: string, specialty: string, password: string) => {
  return await prisma.professional.create({
    data: {
      name,
      email,
      specialty,
      password
    }
  })
}

export const getAllProfessionals = async () => {
  return await prisma.professional.findMany()
}

export const getProfessionalById = async (id: number) => {
  return await prisma.professional.findUnique({
    where: { id }
  })
}

export const deleteProfessional = async (id: number) => {
  return await prisma.professional.delete({
    where: { id }
  })
}