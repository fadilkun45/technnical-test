import React, { useState } from 'react';

type ImageUploaderProps = {
  onChange?: (file: File | null, previewUrl: string | null) => void;
  initialUrl?: string;
};

const ImageUploader: React.FC<ImageUploaderProps> = ({ onChange, initialUrl }) => {
  const [preview, setPreview] = useState<string | null>(initialUrl || null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onChange?.(file, result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
      onChange?.(null, null);
    }
  };

  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <label htmlFor="logo-upload">
        <div
          style={{
            width: 120,
            height: 120,
            border: '1px dashed #ccc',
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            overflow: 'hidden',
            backgroundColor: '#fafafa'
          }}
        >
          {preview ? (
            <img
              src={preview}
              alt="Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div style={{ color: '#999', fontSize: 12 }}>
              Logo
            </div>
          )}
        </div>
      </label>
      <input
        id="logo-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImageUploader;
