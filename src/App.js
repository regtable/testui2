import React, { useState } from 'react';
import io from 'socket.io-client';

function App() {
  const [socket, setSocket] = useState(null);
  const [motd, setMotd] = useState('');

  const connectSocket = () => {
    const socket = io('http://localhost:3001'); // Adjust URL for production
    setSocket(socket);
    socket.on('motd', (data) => {
      setMotd(data);
    });
  };

  const disconnectSocket = () => {
    if (socket) {
      socket.disconnect();
      setSocket(null);
    }
  };

  return (
    <div className="App">
      <button onClick={connectSocket}>Connect to Socket</button>
      <button onClick={disconnectSocket} disabled={!socket}>Disconnect from Socket</button>
      {motd && <p>{motd}</p>}
    </div>
  );
}

export default App;
