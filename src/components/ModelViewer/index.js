import React from 'react';
import { Button } from "@mui/material";
import CameraAltIcon  from '@mui/icons-material/CameraAlt';
import { useParams } from "react-router-dom";

import '@google/model-viewer';

const googleCloudURL = process.env.REACT_APP_CLOUD_STORAGE_URL;

const ModelViewer = ({props}) => {
    const { name } = useParams();

    // TODO: chek if the object exists or not (404)

    return (
    <div>
        <model-viewer 
            alt={name}
            src={googleCloudURL + "/" + name}
            ar 
            ar-modes="webxr scene-viewer quick-look" 
            camera-controls
            auto-rotate
            style={{width: "100vw", height: "90vh"}}>

            <Button slot="ar-button" variant="outlined" startIcon={<CameraAltIcon />} style= {{position: "absolute", top: "32px", "marginLeft": "30%"}}>
                Visualizar AR
            </Button>
        </model-viewer>
    </div>
    );
}

export default ModelViewer;
