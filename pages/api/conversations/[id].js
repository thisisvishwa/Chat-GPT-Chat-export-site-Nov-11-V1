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
        const conversation = await db.collection('conversations').findOne({ _id: ObjectId(id) });
        if (!conversation) {
          return res.status(404).json({ success: false, message: 'Conversation not found' });
        }
        res.status(200).json({ success: true, data: conversation });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;
    case 'PUT':
      try {
        const updatedConversation = await db.collection('conversations').updateOne(
          { _id: ObjectId(id) },
          { $set: req.body },
        );
        if (!updatedConversation) {
          return res.status(404).json({ success: false, message: 'Conversation not found' });
        }
        res.status(200).json({ success: true, data: updatedConversation });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;
    case 'DELETE':
      try {
        const deletedConversation = await db.collection('conversations').deleteOne({ _id: ObjectId(id) });
        if (!deletedConversation) {
          return res.status(404).json({ success: false, message: 'Conversation not found' });
        }
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