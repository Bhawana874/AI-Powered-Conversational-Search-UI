
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import DataCard from './components/DataCard';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Array<{sender: string, text: string}>>([
    { sender: 'system', text: 'Welcome to Atlan Conversational Search! How can I help you today?' }
  ]);
  const [dataResponse, setDataResponse] = useState<any>(null);

  const handleSend = async (text: string) => {
    setMessages(prev => [...prev, { sender: 'user', text }]);
    // Call backend to get LLM response
    const response = await fetch('/api/converse', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ query: text })
    });
    const result = await response.json();
    setMessages(prev => [...prev, { sender: 'ai', text: result.reply }]);
    if (result.data) setDataResponse(result.data);
  };

  return (
    <div style={{maxWidth:800, margin:'auto', padding:32}}>
      <h2>AI-Powered Conversational Search UI</h2>
      <ChatWindow messages={messages} />
      <MessageInput onSend={handleSend} />
      {dataResponse && <DataCard data={dataResponse} />}
    </div>
  );
};

export default App;
