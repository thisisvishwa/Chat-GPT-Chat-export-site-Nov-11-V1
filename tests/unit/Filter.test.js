```javascript
import { render, fireEvent } from '@testing-library/react';
import Filter from '../../components/Filter';

describe('Filter component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Filter />);
    expect(getByTestId('filterInput')).toBeInTheDocument();
  });

  it('calls the filterConversations function on input change', () => {
    const mockFilterConversations = jest.fn();
    const { getByTestId } = render(<Filter filterConversations={mockFilterConversations} />);
    fireEvent.change(getByTestId('filterInput'), { target: { value: 'test' } });
    expect(mockFilterConversations).toHaveBeenCalledWith('test');
  });
});
```