import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const DrawingCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    canvas.isDrawingMode = true;
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={800} height={600} style={{ border: '1px solid #000' }} />
    </div>
  );
};

export default DrawingCanvas;