// src/Chat.js
import React, { useState, useEffect, useRef } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatBoxRef = useRef(null);

  const appendMessage = (message, sender) => {
    setMessages((prevMessages) => [...prevMessages, { message, sender }]);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Append user message to the chat
    appendMessage(input, 'user');
    setInput('');

    try {
      // Send the message to the backend
      const response = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      // Check for response errors
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error('Network response was not ok: ' + errorText);
      }

      const data = await response.json();
      // Append AI response to the chat
      appendMessage(data.response, 'ai');
    } catch (error) {
      console.error('Error:', error);
      appendMessage('Error communicating with the AI. Please try again.', 'ai');
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat box whenever new messages are added
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const renderMessage = (msg) => {
    // Remove asterisks and backticks and split into lines
    const cleanedMessage = msg.replace(/\*{1,2}/g, '').replace(/`{1,3}/g, '').trim();
    const lines = cleanedMessage.split('\n');

    return lines.map((line, index) => {
      // Check for code blocks (triple backticks)
      if (line.startsWith('```') && line.endsWith('```')) {
        // Extract the code by trimming the backticks and return it in a code block
        const code = line.replace(/`{3}/g, '').trim();
        return (
          <div key={index} className="my-2 p-2">
            <pre className="bg-black text-white p-2 rounded">
              <code>{code}</code>
            </pre>
            <button 
              onClick={() => navigator.clipboard.writeText(code)} 
              className="mt-2 text-sm text-blue-600 hover:underline"
            >
              Copy
            </button>
          </div>
        );
      }

      // Check for titles (lines ending with a colon)
      if (line.includes(':')) {
        const [title, content] = line.split(':');
        return (
          <div key={index} className="mt-2">
            <strong>{title.trim()}:</strong> {content.trim()}
          </div>
        );
      }

      return <p key={index}>{line}</p>;
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-4 rounded shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">AI Chatbot</h1>
      <div
        ref={chatBoxRef}
        className="h-96 overflow-y-auto p-4 bg-gray-100 rounded mb-4"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-2 rounded shadow ${
              msg.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'
            }`}
          >
            {renderMessage(msg.message)}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
