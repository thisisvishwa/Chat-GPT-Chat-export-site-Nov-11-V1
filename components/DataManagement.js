import React, { useState } from 'react';
import { api } from '../lib/api';

const DataManagement = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await api.post('/conversations/upload', formData);
      if (response.status === 200) {
        alert('Data uploaded successfully');
      }
    } catch (error) {
      console.error('Error uploading data', error);
    }
  };

  return (
    <div>
      <h2>Data Management</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default DataManagement;