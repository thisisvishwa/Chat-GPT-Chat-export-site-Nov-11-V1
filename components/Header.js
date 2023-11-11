import React from 'react';
import Link from 'next/link';
import { auth } from '../lib/auth';

const Header = () => {
  const user = auth.getCurrentUser();

  return (
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        {user ? (
          <>
            <Link href="/conversations">
              <a>Conversations</a>
            </Link>
            {user.role === 'admin' && (
              <Link href="/admin">
                <a>Admin Panel</a>
              </Link>
            )}
            <button onClick={() => auth.logout()}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/login">
              <a>Login</a>
            </Link>
            <Link href="/register">
              <a>Register</a>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;