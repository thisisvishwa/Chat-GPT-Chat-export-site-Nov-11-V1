# ChatGPT Conversations Viewer

This project is a Next.js-based website that displays ChatGPT conversations. It is designed for users interested in reviewing ChatGPT interactions.

## Core Features

- User authentication
- Conversation display
- Admin panel
- Advanced search and filtering

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

- `pages/index.js`: The homepage with a login/register option.
- `pages/conversations.js`: Displays conversations in a chat bubble format.
- `pages/admin.js`: The admin panel for user and data management.

## Components

- `components/Header.js`: The header component.
- `components/Footer.js`: The footer component.
- `components/Conversation.js`: The conversation display component.
- `components/Search.js`: The search component.
- `components/Filter.js`: The filter component.
- `components/Pagination.js`: The pagination component.
- `components/Tag.js`: The tag component.
- `components/AdminPanel.js`: The admin panel component.
- `components/UserManagement.js`: The user management component in the admin panel.
- `components/DataManagement.js`: The data management component in the admin panel.
- `components/Analytics.js`: The analytics component in the admin panel.

## API Routes

- `pages/api/auth/register.js`: The API route for user registration.
- `pages/api/auth/login.js`: The API route for user login.
- `pages/api/auth/recover.js`: The API route for password recovery.
- `pages/api/users/index.js`: The API route for user management.
- `pages/api/users/[id].js`: The API route for individual user management.
- `pages/api/conversations/index.js`: The API route for conversation data retrieval.
- `pages/api/conversations/[id].js`: The API route for individual conversation data management.

## Testing

Unit, integration, and end-to-end tests are located in the `tests` directory.

## Deployment

Deployment instructions are provided in `DEPLOYMENT.md`.

## Support

For support, please open an issue in the GitHub repository.

## License

This project is licensed under the MIT License.