import { NextApiRequest, NextApiResponse } from 'next';
import { UserSchema } from '../../lib/db';
import { auth } from '../../lib/auth';

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email, password, details } = req.body;

  try {
    const existingUser = await UserSchema.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await auth.hashPassword(password);

    const newUser = new UserSchema({
      email,
      password: hashedPassword,
      details,
    });

    await newUser.save();

    return res.status(201).json({ message: 'USER_REGISTERED' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}