```javascript
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { getPage } from 'next-page-tester';
import { server, rest } from 'tests/server';
import { API_URL } from 'lib/api';

describe('Homepage', () => {
  it('renders homepage with login/register option', async () => {
    const { render } = await getPage({
      route: '/',
    });

    render();

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  it('fetches and displays conversations', async () => {
    const mockConversations = [
      { id: 1, content: 'Hello, how can I help you?' },
      { id: 2, content: 'I need assistance with my account.' },
    ];

    server.use(
      rest.get(`${API_URL}/conversations`, (req, res, ctx) => {
        return res(ctx.json(mockConversations));
      })
    );

    const { render } = await getPage({
      route: '/',
    });

    render();

    mockConversations.forEach((conversation) => {
      expect(screen.getByText(conversation.content)).toBeInTheDocument();
    });
  });

  it('handles server error', async () => {
    server.use(
      rest.get(`${API_URL}/conversations`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const { render } = await getPage({
      route: '/',
    });

    render();

    expect(screen.getByText('An error occurred while loading conversations.')).toBeInTheDocument();
  });
});
```