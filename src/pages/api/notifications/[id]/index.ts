import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { notificationsValidationSchema } from 'validationSchema/notifications';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getNotificationsById();
    case 'PUT':
      return updateNotificationsById();
    case 'DELETE':
      return deleteNotificationsById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getNotificationsById() {
    const data = await prisma.notifications.findFirst({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }

  async function updateNotificationsById() {
    await notificationsValidationSchema.validate(req.body);
    const data = await prisma.notifications.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });
    return res.status(200).json(data);
  }
  async function deleteNotificationsById() {
    const data = await prisma.notifications.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
