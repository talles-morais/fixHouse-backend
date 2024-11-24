import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const createService = async (clientId: number, professionalId: number) => {
  return await prisma.service.create({
    data: {
      clientId,
      professionalId
    },
    include: {
      client: true,
      professional: true,
    }
  })
}

export const getAllServices = async () => {
  return await prisma.service.findMany({
    include: {
      client: true,
      professional: true,
    },
  });
};

export const getServiceById = async (serviceId: number) => {
  return await prisma.service.findUnique({
    where: { id: serviceId },
    include: {
      client: true,
      professional: true,
    },
  });
};

export const deleteService = async (serviceId: number) => {
  return await prisma.service.delete({
    where: { id: serviceId },
  });
};
