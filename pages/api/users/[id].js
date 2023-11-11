import { ObjectId } from 'mongodb';
import { db } from '../../../lib/db';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const user = await db.collection('users').findOne({ _id: ObjectId(id) });
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;
    case 'PUT':
      try {
        const { name, email } = req.body;
        const updatedUser = await db.collection('users').updateOne(
          { _id: ObjectId(id) },
          { $set: { name, email } },
        );
        if (!updatedUser) return res.status(404).json({ success: false, message: 'User not found' });
        res.status(200).json({ success: true, data: updatedUser });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;
    case 'DELETE':
      try {
        const deletedUser = await db.collection('users').deleteOne({ _id: ObjectId(id) });
        if (!deletedUser) return res.status(404).json({ success: false, message: 'User not found' });
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}