import React from 'react';
import AdminPanel from '../components/AdminPanel';
import { auth } from '../lib/auth';

class Admin extends React.Component {
  static async getInitialProps(ctx) {
    const token = auth(ctx);
    const res = await fetch('http://localhost:3000/api/users', {
      method: 'GET',
      headers: { Authorization: JSON.stringify({ token }) },
    });

    if (res.status === 401 && !ctx.req) {
      Router.push('/login');
      return {};
    }

    if (res.status === 401 && ctx.req) {
      ctx.res.writeHead(302, {
        Location: '/login',
      });
      ctx.res.end();
      return;
    }

    const json = await res.json();
    return { users: json.users };
  }

  render() {
    return (
      <div>
        <AdminPanel users={this.props.users} />
      </div>
    );
  }
}

export default Admin;