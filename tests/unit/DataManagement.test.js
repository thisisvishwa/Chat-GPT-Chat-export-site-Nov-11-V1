```javascript
import { render, fireEvent } from '@testing-library/react';
import DataManagement from '../../components/DataManagement';

describe('DataManagement Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<DataManagement />);
    expect(getByTestId('data-management')).toBeInTheDocument();
  });

  it('handles upload event', () => {
    const { getByTestId } = render(<DataManagement />);
    const uploadButton = getByTestId('upload-button');
    fireEvent.click(uploadButton);
    expect(getByTestId('upload-modal')).toBeInTheDocument();
  });

  it('handles edit event', () => {
    const { getByTestId } = render(<DataManagement />);
    const editButton = getByTestId('edit-button');
    fireEvent.click(editButton);
    expect(getByTestId('edit-modal')).toBeInTheDocument();
  });

  it('handles delete event', () => {
    const { getByTestId } = render(<DataManagement />);
    const deleteButton = getByTestId('delete-button');
    fireEvent.click(deleteButton);
    expect(getByTestId('delete-modal')).toBeInTheDocument();
  });
});
```