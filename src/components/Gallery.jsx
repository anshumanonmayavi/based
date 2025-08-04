// File: components/Gallery.jsx
import React, { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const listRef = ref(storage, 'images/');
      const res = await listAll(listRef);
      const urls = await Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
      setImages(urls);
    };

    fetchImages();
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((url, index) => (
          <img key={index} src={url} alt={`Uploaded ${index}`} className="w-full h-64 object-cover rounded shadow" />
        ))}
      </div>
    </section>
  );
}

