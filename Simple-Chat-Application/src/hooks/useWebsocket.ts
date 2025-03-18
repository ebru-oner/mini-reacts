import { useEffect, useRef, useState } from "react";

const useWebsocket = (url: string) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [messages, setMessages] = useState<string[]>([]);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);
    socketRef.current = socket;
    socket.onopen = () => {
      console.log("Client is connected");
      setIsConnected(true);
    };

    socket.onmessage = (event) => {
      console.log(`Message recevied: ${event.data}`);
      setMessages((prev) => [...prev, event.data]);
    };

    socket.onclose = () => {
      console.log("Client is disconnected!");
      setIsConnected(false);
    };

    return () => {
      socket.close();
    };
  }, [url]);

  const sendMessage = (message: string) => {
    if (socketRef?.current && socketRef.current.readyState === WebSocket.OPEN) socketRef.current.send(message);
  };

  return { messages, isConnected, sendMessage };
};

export default useWebsocket;
