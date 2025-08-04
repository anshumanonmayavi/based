import React, { useState } from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    const imageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(imageRef, file);
    alert('Uploaded! Refresh the page to see the image.');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <section className="p-6 bg-white shadow">
      <h2 className="text-xl font-bold mb-2">Upload Image</h2>
      <div
        className="border-2 border-dashed border-gray-400 p-6 text-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p>Drag and drop an image here</p>
        <p className="mt-2">or</p>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mt-2"
        />
        <button
          onClick={handleUpload}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </div>
    </section>
  );
}