
import React, { useState } from 'react';

const MessageInput = ({ onSend }: { onSend: (text: string) => void }) => {
  const [input, setInput] = useState('');
  return (
    <form onSubmit={e => {e.preventDefault(); onSend(input); setInput('')}}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Ask a data question..."
        style={{width:'70%', marginRight:12, padding:8}}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
