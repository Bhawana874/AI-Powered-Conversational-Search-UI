# AI-Powered-Conversational-Search-UI
A modern web application that lets data teams query, explore, and visualize data using an AI-powered conversational interface.

## Features
Conversational chat interface with LLM-assisted search

Real-time answer generation and context-aware suggestions

Extensible cards for data visualization (charts, tables)

Accessible, clean and responsive UI (React/TypeScript)

Sample backend proxy for OpenAI API calls (Node.js/Express)

## Folder Structure
```txt
project-root/
  ├── client/        # React/TypeScript frontend
  │   ├── src/
  │   │   ├── App.tsx
  │   │   ├── components/
  │   │   │   ├── ChatWindow.tsx
  │   │   │   ├── DataCard.tsx
  │   │   │   ├── MessageInput.tsx
  │   └── package.json
  ├── server/        # Node.js/Express backend
  │   ├── index.js
  │   └── package.json
  └── README.md
```
  ## Getting Started
# Prerequisites
Node.js (v14+ recommended)

npm (v6+ recommended)

OpenAI account & API key (for backend LLM calls)

# Frontend Setup
cd client
npm install
npm start
# backend Setup
cd server
npm install
node index.js
Connecting Frontend and Backend
The frontend makes requests (e.g., /api/converse) which are handled by the backend server.

Update proxy settings or API endpoint URLs in your frontend as needed.

Usage
Enter a data question in the chat to get AI-powered responses.

Example queries:

“Show me sales by region for Q2”

“How many users signed up last month?”

Answers will appear in the chat window. If relevant data is recognized, it will be visualized in a Data Card.


