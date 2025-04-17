import React, { useState } from 'react';

type FileUploadProps = {
  onFileUpload: (file: File) => void;
};

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileUpload(file);
    }
  };

  return (
    <div style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px', width: '300px' }}>
      <input type="file"  accept="application/pdf" onChange={handleFileChange} />
      {selectedFile && (
        <div style={{ marginTop: '10px' }}>
          <strong>Selected File:</strong> {selectedFile.name}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
