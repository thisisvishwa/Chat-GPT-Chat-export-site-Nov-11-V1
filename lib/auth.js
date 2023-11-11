```javascript
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from './db';

export const auth = {
  async registerUser(email, password, userDetails = {}) {
    const userExists = await db.users.findOne({ email });

    if (userExists) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.users.insert({ email, password: hashedPassword, ...userDetails });

    return user;
  },

  async loginUser(email, password) {
    const user = await db.users.findOne({ email });

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { user, token };
  },

  async recoverPassword(email) {
    const user = await db.users.findOne({ email });

    if (!user) {
      throw new Error('User not found');
    }

    const tempPassword = Math.random().toString(36).slice(-8);
    const hashedTempPassword = await bcrypt.hash(tempPassword, 10);

    await db.users.updateOne({ _id: user._id }, { $set: { password: hashedTempPassword } });

    // Send tempPassword to user's email
    // ...

    return tempPassword;
  },
};
```