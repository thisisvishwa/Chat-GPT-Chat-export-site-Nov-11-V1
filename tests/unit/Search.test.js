```javascript
import { render, fireEvent } from '@testing-library/react';
import Search from '../../components/Search';

describe('Search Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Search />);
    const searchInput = getByTestId('searchInput');
    expect(searchInput).toBeInTheDocument();
  });

  it('calls the search function on form submission', () => {
    const searchConversations = jest.fn();
    const { getByTestId } = render(<Search searchConversations={searchConversations} />);
    const searchInput = getByTestId('searchInput');

    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.submit(searchInput);

    expect(searchConversations).toHaveBeenCalledWith('test');
  });
});
```