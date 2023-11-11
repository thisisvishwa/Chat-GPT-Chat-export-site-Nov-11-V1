import { db } from '../../../lib/db';
import { auth } from '../../../lib/auth';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const users = await db.collection('users').find().toArray();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch users' });
    }
  } else if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      const hashedPassword = await auth.hashPassword(password);
      const newUser = await db.collection('users').insertOne({ email, password: hashedPassword });
      res.status(201).json(newUser.ops[0]);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}