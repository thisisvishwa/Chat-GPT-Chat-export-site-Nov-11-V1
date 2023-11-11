import { NextApiRequest, NextApiResponse } from 'next';
import { recoverPassword } from '../../../lib/auth';
import { db } from '../../../lib/db';

export default async function recover(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  try {
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const recoveryResult = await recoverPassword(email);

    if (recoveryResult) {
      return res.status(200).json({ message: 'Password recovery email sent' });
    } else {
      return res.status(500).json({ message: 'Error sending recovery email' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
}