// src/components/Queue.js
import React, { useState } from 'react';
import './StackQueue.css';

const Queue = () => {
  const [queue, setQueue] = useState([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  const enqueue = () => {
    if (input.trim()) {
      setQueue([...queue, input]);
      setHistory([...history, `Enqueued: ${input}`]);
      setInput('');
    }
  };

  const dequeue = () => {
    if (queue.length > 0) {
      const dequeued = queue[0];
      setQueue(queue.slice(1));
      setHistory([...history, `Dequeued: ${dequeued}`]);
    }
  };

  return (
    <div className="queue-container">
      <h2>Queue Implementation</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter value"
      />
      <button onClick={enqueue}>Enqueue</button>
      <button onClick={dequeue} disabled={queue.length === 0}>
        Dequeue
      </button>
      <div className="queue-display">
        <h3>Queue:</h3>
        <ul>
          {queue.map((item, index) => (
            <li key={index} className="queue-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="history">
        <h4>Operation History:</h4>
        <ul>
          {history.map((action, index) => (
            <li key={index} className="history-item">
              {action}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Queue;
