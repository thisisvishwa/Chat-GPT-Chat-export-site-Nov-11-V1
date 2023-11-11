import React, { useState, useEffect } from 'react';
import { api } from '../lib/api';

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = async () => {
    try {
      const response = await api.get('/analytics');
      setAnalyticsData(response.data);
    } catch (error) {
      console.error('Failed to fetch analytics data:', error);
    }
  };

  if (!analyticsData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Analytics</h2>
      <div>
        <h3>User Activity</h3>
        <p>Total Users: {analyticsData.totalUsers}</p>
        <p>Active Users: {analyticsData.activeUsers}</p>
      </div>
      <div>
        <h3>Website Usage</h3>
        <p>Total Conversations: {analyticsData.totalConversations}</p>
        <p>Conversations Per User: {analyticsData.conversationsPerUser}</p>
      </div>
    </div>
  );
};

export default Analytics;