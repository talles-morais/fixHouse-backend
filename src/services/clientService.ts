import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const createClient = async (name: string, email: string, password: string) => {
  return await prisma.client.create({
    data: {
      name,
      email,
      password
    }
  })
}

export const getAllUsers = async () => {
  return await prisma.client.findMany()
}

export const getUserById = async (id: number) => {
  return await prisma.client.findUnique({
    where: { id }
  })
}

export const getUserByEmail = async (email: string) => {
  return await prisma.client.findFirst({
    where: { email }
  })
}

export const deleteUser = async (id: number) => {
  return await prisma.client.delete({
    where: { id }
  })
}