import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { api } from '../lib/api';
import Conversation from '../components/Conversation';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';
import Tag from '../components/Tag';

export default function Conversations() {
    const [conversations, setConversations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        loadConversations();
    }, []);

    async function loadConversations() {
        setLoading(true);
        try {
            const response = await api.get('/conversations');
            setConversations(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    function handleConversationClick(id) {
        router.push(`/conversations/${id}`);
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <Search />
            <Filter />
            <Pagination />
            {conversations.map(conversation => (
                <div key={conversation.id} onClick={() => handleConversationClick(conversation.id)}>
                    <Conversation data={conversation} />
                    <Tag tags={conversation.tags} />
                </div>
            ))}
        </div>
    );
}