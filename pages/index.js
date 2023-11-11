import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { auth } from '../lib/auth';

export default function Home() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await auth.loginUser();
      router.push('/conversations');
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async () => {
    try {
      await auth.registerUser();
      router.push('/conversations');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Welcome to ChatGPT Conversations</h1>
      <p>Explore and review ChatGPT interactions.</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
      <Link href="/conversations">
        <a>View Conversations</a>
      </Link>
    </div>
  );
}