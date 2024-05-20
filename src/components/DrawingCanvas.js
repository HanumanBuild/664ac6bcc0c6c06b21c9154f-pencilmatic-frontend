// Import necessary libraries
import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import axios from 'axios';

// Define the DrawingCanvas component
const DrawingCanvas = () => {
  const canvasRef = useRef(null);

  // Initialize the canvas when the component mounts
  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    canvas.isDrawingMode = true;
  }, []);

  // Function to save the drawing
  const saveDrawing = async () => {
    const canvas = canvasRef.current.fabric;
    const drawingData = canvas.toDataURL('png');
    const token = localStorage.getItem('token');

    try {
      await axios.post(
        `${process.env.REACT_APP_PENCILMATIC_BACKEND_URL}/api/drawing/save`,
        { drawingData },
        {
          headers: {
            'x-auth-token': token,
          },
        }
      );
      alert('Drawing saved successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to save drawing.');
    }
  };

  // Render the canvas and save button
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <canvas ref={canvasRef} width={800} height={600} className="border border-gray-300" />
      <button
        onClick={saveDrawing}
        className="mt-4 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Save Drawing
      </button>
    </div>
  );
};

// Export the DrawingCanvas component
export default DrawingCanvas;