import React, { useState } from 'react';

const Emojis = () => {
  const emojis = ["😀", "😂", "😍", "😎", "😭", "😡"];
  const [emoji, setEmoji] = useState(emojis[0]);

  const cambiarEmoji = () => {
    const nuevoEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(nuevoEmoji);
  };

  return (
    <div className="emojis">
      <p>{emoji}</p>
      <button onClick={cambiarEmoji}>Cambiar Emoji</button>
    </div>
  );
};

export default Emojis;
