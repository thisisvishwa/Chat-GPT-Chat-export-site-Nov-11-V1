import React from 'react';
import UserManagement from './UserManagement';
import DataManagement from './DataManagement';
import Analytics from './Analytics';

const AdminPanel = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <UserManagement />
      <DataManagement />
      <Analytics />
    </div>
  );
};

export default AdminPanel;