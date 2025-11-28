import React, { useState } from "react";

function Image() {
  const [width, setWidth] = useState(250);
  const [visible, setVisible] = useState(true);

  const zoomIn = () => setWidth(prev => Math.min(prev * 1.1, 1000));
  const zoomOut = () => setWidth(prev => Math.max(prev * 0.9, 100));
  const reset = () => {
    setWidth(250);
    setVisible(true);
  };
  const remove = () => setVisible(false);

  return (
    <div>
      {visible && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Prague_%286365119737%29.jpg"
          alt="Прага"
          style={{ width: width + "px", display: "block" }}
        />
      )}

      <div className="image-controls">
        <button onClick={reset}>Додати</button>
        <button onClick={zoomIn}>Збільшити</button>
        <button onClick={zoomOut}>Зменшити</button>
        <button onClick={remove}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;
