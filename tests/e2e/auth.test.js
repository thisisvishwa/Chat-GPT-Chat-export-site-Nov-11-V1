```javascript
const { registerUser, loginUser, recoverPassword } = require('../../pages/api/auth');
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('Authentication End-to-End Tests', () => {
  it('should register a new user', async () => {
    const response = await registerUser('test@example.com', 'password123');
    expect(response).to.have.property('message', 'USER_REGISTERED');
  });

  it('should login a user', async () => {
    const response = await loginUser('test@example.com', 'password123');
    expect(response).to.have.property('message', 'USER_LOGGED_IN');
  });

  it('should recover a user password', async () => {
    const response = await recoverPassword('test@example.com');
    expect(response).to.have.property('message', 'PASSWORD_RECOVERED');
  });
});
```