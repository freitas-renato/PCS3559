import React from "react";
import {Navigate} from "react-router-dom";
import {useDropzone} from "react-dropzone";
import axios from "axios";

import './index.css';

const Dropzone = ({props}) => {
  const [isFileUploaded, setIsFileUploaded] = React.useState(false);

  const [fileName, setFileName] = React.useState('');

  const api_url = process.env.REACT_APP_API_URL;

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    onDrop: files => {
      console.log(files);
      // Axios post files
      const formData = new FormData();
      for (let f of files) {
        formData.append('file', f);
      }

      axios.post(`${api_url}/object`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res);
        setFileName(res.data.name);
        setIsFileUploaded(true);
      }).catch(err => {
        console.log(err);
      });
    }
  });

  // Show files list on dropzone
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  // Redirect to Model Viewer page using uploaded file name
  if (isFileUploaded) {
    var redirect = `/object/${fileName}`;
    return <Navigate to={redirect} />
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
