import { db } from '../../../lib/db';
import { ConversationSchema } from '../../../lib/schemas';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const conversations = await db.find(ConversationSchema);
      res.status(200).json(conversations);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving conversations' });
    }
  } else if (req.method === 'POST') {
    try {
      const newConversation = new ConversationSchema(req.body);
      const savedConversation = await db.save(newConversation);
      res.status(201).json(savedConversation);
    } catch (error) {
      res.status(500).json({ message: 'Error saving conversation' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}