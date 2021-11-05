import React from "react";
import {Navigate} from "react-router-dom";
import {useDropzone} from "react-dropzone";

import './index.css';

const Dropzone = ({props}) => {
  const [isFileUploaded, setIsFileUploaded] = React.useState(false);


  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    onDrop: files => {
      console.log(files);

      // TODO: save file in external database
      setIsFileUploaded(true);
    }
  });

  // Show files list on dropzone
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  // TODO: redirect based on uploaded file
  if (isFileUploaded) {
    return <Navigate to="/object"/>
  } 

  return (
    <div {...getRootProps({className: "dropzone"})}>
      <input {...getInputProps()} />
      <h1>Arraste seu arquivo .gLTF ou .GLB aqui</h1> 
      <h3>Ou clique para selecionar os arquivos</h3>
      <ul>{files}</ul>
    </div>
  );

}

export default Dropzone;
