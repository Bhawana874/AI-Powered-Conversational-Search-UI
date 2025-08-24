
import React from 'react';

const ChatWindow = ({ messages }: { messages: Array<{ sender: string, text: string }> }) => (
  <div style={{border:'1px solid #ccc', padding:24, minHeight:300, marginBottom:20}}>
    {messages.map((m, i) =>
      <div key={i} style={{margin:'12px 0'}}>
        <b>{m.sender === 'user' ? 'You:' : m.sender === 'ai' ? 'AI:' : ''}</b> {m.text}
      </div>
    )}
  </div>
);

export default ChatWindow;
