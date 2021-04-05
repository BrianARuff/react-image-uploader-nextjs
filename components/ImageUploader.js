import React, { useRef, useState } from "react";

const ImageUploader = () => {
  const [image, setImages] = useState(null);
  const [error, setError] = useState(null);
  const imgTest = useRef();
  const handleImageUpload = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setImages(url);
  };
  return (
    <article className="image-uploader">
      <input onChange={handleImageUpload} type="file" name="files" />
      <img ref={imgTest} id="test" />
      {image ? (
        <img src={image} alt="image preview" />
      ) : error ? (
        <p>Error uploading image</p>
      ) : (
        <p>Please upload image</p>
      )}
    </article>
  );
};

export default ImageUploader;
