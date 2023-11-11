```javascript
import { render } from '@testing-library/react';
import Footer from '../../components/Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('© 2022 ChatGPT Conversations')).toBeInTheDocument();
  });
});
```