import React, { useEffect, useState } from 'react';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../firebase';

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const listRef = ref(storage, 'images/');
      const res = await listAll(listRef);
      const urls = await Promise.all(res.items.map((item) => getDownloadURL(item)));
      setImages(urls);
    };

    fetchImages();
  }, []);

  return (
    <section className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((url, i) => (
          <img key={i} src={url} alt={`img-${i}`} />
        ))}
      </div>
    </section>
  );
}
