import React, { useState } from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    const imageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(imageRef, file);
    alert('Image uploaded! Refresh to see it in the gallery.');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <section className="upload-section">
      <h2>Upload Image</h2>
      <div
        className="upload-box"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p>Drag and drop an image here</p>
        <p>or</p>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <br />
        <button onClick={handleUpload}>Upload</button>
      </div>
    </section>
  );
}
