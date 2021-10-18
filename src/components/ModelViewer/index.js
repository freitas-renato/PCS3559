import React from 'react';
import { Button } from "@mui/material";
import CameraAltIcon  from '@mui/icons-material/CameraAlt';

import '@google/model-viewer';

const ModelViewer = ({ objectSource }) => (
    <div>
    <model-viewer 
        alt="Eiffel tower 3D"
        src={objectSource}
        ar 
        modes="webxr scene-viewer quick-look" 
        camera-controls
        auto-rotate
        style={{width: "100vw", height: "90vh"}}>

        <Button slot="ar-button" variant="outlined" startIcon={<CameraAltIcon />} style= {{position: "absolute", top: "32px", "margin-left": "30%"}}>
            Visualizar AR
        </Button>
    </model-viewer>
    </div>
);

export default ModelViewer;
