import { PrismaClient } from '@prisma/client'

function createPrismaClient(): PrismaClient {
	return new PrismaClient()
}

const prismaClient =
	process.env.NODE_ENV !== 'production'
		? new PrismaClient()
		: createPrismaClient()

export const database = prismaClient
