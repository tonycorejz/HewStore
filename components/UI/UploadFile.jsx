import { useState, useRef } from 'react';

const UploadFile = ({children, name, setFile}) => {
  const FileInput = useRef(null);

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    if(file){
      const base64 = await convertBase64(file);
      setFile(name, base64);
    } else {
      setFile(name, "");
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function getFile() {
    FileInput.current.click();
  }

  return (
    <div className="for-add-peview">
      <input ref={FileInput} type="file" onChange={(e) => {uploadFile(e);} } style={{display: "none"}} />
      <button className="preview-button" onClick={getFile}>{children}</button>
    </div>
  )

}

export default UploadFile;