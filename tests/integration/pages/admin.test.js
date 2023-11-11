```javascript
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Admin from '../../../pages/admin';

describe('Admin Page', () => {
  it('renders without crashing', () => {
    render(<Admin />);
    expect(screen.getByTestId('admin-page')).toBeInTheDocument();
  });

  it('displays user management section', () => {
    render(<Admin />);
    expect(screen.getByTestId('user-management')).toBeInTheDocument();
  });

  it('displays data management section', () => {
    render(<Admin />);
    expect(screen.getByTestId('data-management')).toBeInTheDocument();
  });

  it('displays analytics section', () => {
    render(<Admin />);
    expect(screen.getByTestId('analytics')).toBeInTheDocument();
  });
});
```