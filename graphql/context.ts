import { PrismaClient } from '@prisma/client';
import prisma from '../lib/prisma';

export type context = {
	prisma: PrismaClient
}

export async function createContext(req, res): Promise<context> {
	return {
		prisma,
	}
}