```javascript
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('displays the website title', () => {
    render(<Header />);
    const titleElement = screen.getByText(/ChatGPT Conversations/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('displays login/register links when user is not authenticated', () => {
    render(<Header />);
    const loginLinkElement = screen.getByText(/Login/i);
    const registerLinkElement = screen.getByText(/Register/i);
    expect(loginLinkElement).toBeInTheDocument();
    expect(registerLinkElement).toBeInTheDocument();
  });
});
```