```javascript
import { render, screen } from '@testing-library/react';
import UserManagement from '../../components/UserManagement';

describe('UserManagement Component', () => {
  test('renders without crashing', () => {
    render(<UserManagement />);
    expect(screen.getByTestId('user-management')).toBeInTheDocument();
  });

  test('displays user list', () => {
    render(<UserManagement />);
    const userList = screen.getByTestId('user-list');
    expect(userList).toBeInTheDocument();
    expect(userList.children.length).toBeGreaterThan(0);
  });

  test('can delete a user', () => {
    render(<UserManagement />);
    const deleteButtons = screen.getAllByTestId('delete-user');
    expect(deleteButtons.length).toBeGreaterThan(0);
    deleteButtons[0].click();
    expect(screen.getByTestId('user-deleted-message')).toBeInTheDocument();
  });

  test('can edit a user', () => {
    render(<UserManagement />);
    const editButtons = screen.getAllByTestId('edit-user');
    expect(editButtons.length).toBeGreaterThan(0);
    editButtons[0].click();
    expect(screen.getByTestId('user-edit-form')).toBeInTheDocument();
  });
});
```