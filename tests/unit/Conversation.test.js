```javascript
import { render, screen } from '@testing-library/react';
import Conversation from '../../components/Conversation';

describe('Conversation Component', () => {
  const mockConversation = {
    id: '1',
    messages: [
      { id: '1', text: 'Hello', sender: 'user' },
      { id: '2', text: 'Hi', sender: 'bot' },
    ],
  };

  beforeEach(() => {
    render(<Conversation conversation={mockConversation} />);
  });

  test('renders conversation messages', () => {
    const userMessage = screen.getByText(/Hello/i);
    const botMessage = screen.getByText(/Hi/i);

    expect(userMessage).toBeInTheDocument();
    expect(botMessage).toBeInTheDocument();
  });

  test('renders conversation in correct order', () => {
    const messages = screen.getAllByTestId('message');
    expect(messages[0].textContent).toBe('Hello');
    expect(messages[1].textContent).toBe('Hi');
  });
});
```