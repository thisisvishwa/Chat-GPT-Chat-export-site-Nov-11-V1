import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../lib/auth';
import { db } from '../../lib/db';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method not allowed');
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    const isPasswordValid = await auth.verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = auth.createToken(user._id);

    return res.status(200).json({ message: 'USER_LOGGED_IN', token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}