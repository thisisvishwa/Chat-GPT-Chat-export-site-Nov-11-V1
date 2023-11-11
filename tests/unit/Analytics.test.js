```javascript
import { render, screen } from '@testing-library/react';
import Analytics from '../../components/Analytics';

describe('Analytics Component', () => {
  test('renders without crashing', () => {
    render(<Analytics />);
    expect(screen.getByTestId('analytics')).toBeInTheDocument();
  });

  test('displays user activity chart', () => {
    render(<Analytics />);
    const chart = screen.getByTestId('user-activity-chart');
    expect(chart).toBeInTheDocument();
  });

  test('displays website usage chart', () => {
    render(<Analytics />);
    const chart = screen.getByTestId('website-usage-chart');
    expect(chart).toBeInTheDocument();
  });
});
```