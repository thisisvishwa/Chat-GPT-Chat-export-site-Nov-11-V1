import React from 'react';

// Import the API object
import { api } from '../lib/api';

class Conversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversation: null,
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const conversation = await api.loadConversations();
      this.setState({ conversation, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    const { conversation, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        {conversation.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Conversation;