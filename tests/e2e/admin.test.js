```javascript
const { test, expect } = require('@playwright/test');

test.describe('Admin Panel E2E Tests', () => {
  let page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('Admin Login', async () => {
    await page.goto('http://localhost:3000/admin');
    await page.fill('#loginForm #email', 'admin@example.com');
    await page.fill('#loginForm #password', 'adminpassword');
    await page.click('#loginForm #submit');
    const welcomeMessage = await page.textContent('.welcome-message');
    expect(welcomeMessage).toContain('Welcome, Admin');
  });

  test('User Management', async () => {
    await page.goto('http://localhost:3000/admin/users');
    const users = await page.$$eval('.user-row', users => users.length);
    expect(users).toBeGreaterThan(0);
  });

  test('Data Management', async () => {
    await page.goto('http://localhost:3000/admin/data');
    const conversations = await page.$$eval('.conversation-row', conversations => conversations.length);
    expect(conversations).toBeGreaterThan(0);
  });

  test('Analytics', async () => {
    await page.goto('http://localhost:3000/admin/analytics');
    const analyticsData = await page.$$eval('.analytics-data', data => data.length);
    expect(analyticsData).toBeGreaterThan(0);
  });
});
```