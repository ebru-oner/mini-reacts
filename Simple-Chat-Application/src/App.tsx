import React, { useState } from "react";
import useWebsocket from "./hooks/useWebsocket";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const { messages, isConnected, sendMessage } = useWebsocket("ws://localhost:5001");

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-10 p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Nice and simple chat application</h2>
      <div className="space-y-4 mb-4 h-64 overflow-y-auto border p-2">
        {messages.map((msg, index) => (
          <div key={index} className="p-2 border-b">
            {msg}
          </div>
        ))}
      </div>
      <div className="flex">
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-2 border rounded" placeholder="Type a message..." />
        <button onClick={handleSendMessage} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
          Send
        </button>
      </div>
      <p className={`text-sm mt-2 ${isConnected ? "text-green-500" : "text-red-500"}`}>{isConnected ? "Connected" : "Disconnected"}</p>
    </div>
  );
};

export default App;
