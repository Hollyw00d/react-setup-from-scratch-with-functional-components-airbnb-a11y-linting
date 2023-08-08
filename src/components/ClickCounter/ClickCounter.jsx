import React, { useState } from 'react';

export default function ClickCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)} type="button">
        Count {count}
      </button>
    </div>
  );
}
