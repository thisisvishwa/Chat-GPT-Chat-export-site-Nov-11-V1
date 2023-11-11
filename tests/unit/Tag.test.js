```javascript
import { render, fireEvent } from '@testing-library/react';
import Tag from '../../components/Tag';

describe('Tag Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Tag />);
    const tagElement = getByTestId('tagList');
    expect(tagElement).toBeInTheDocument();
  });

  it('handles click event', () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(<Tag onClick={mockOnClick} />);
    const tagElement = getByTestId('tagList');

    fireEvent.click(tagElement);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
```