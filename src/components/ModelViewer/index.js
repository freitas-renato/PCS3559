import React, { useRef, useEffect } from 'react';
import { Button, Card, CardContent, Typography, CircularProgress  } from "@mui/material";
import CameraAltIcon  from '@mui/icons-material/CameraAlt';
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";

import '@google/model-viewer';

import './index.css';

const googleCloudURL = process.env.REACT_APP_CLOUD_STORAGE_URL;


const qrCode = () => {
    return (
        <div id="qrcode-card">
            <Card sx={{ display: "flex", maxWidth: 450, alignItems: "top" }}>
                <QRCode value={window.location.href} size={150} />
                
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Typography variant="h5" component="div">
                        Escaneie o QR Code
                    </Typography>
                    <Typography variant="body" component="div">
                        Para visualizar o modelo em
                    </Typography>
                    <Typography variant="body" component="div">
                        realidade aumentada
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}


const ModelViewer = ({props}) => {
    const { name } = useParams();

    const innerRef = useRef(null);
    const [isLoading, setIsLoading] = React.useState(true);

    // TODO: chek if the object exists or not (404)

    // Function that checks if the browser is mobile or desktop
    const isMobile = () => {
        if(window.innerWidth < window.innerHeight) {
            return true;
        } else {
            return false;
        }
    }


    useEffect(() => {
        const div = innerRef.current;
        div.addEventListener('progress', (event) => {
            console.log('Loading progress', event.detail);
            if (event.detail.totalProgress === 1) {
                setIsLoading(false);
                console.log('Model loaded');
            }
        });
        return () => {
            div.removeEventListener('progress', () => {
                console.log('removed loaded event listener');
            });
        }
    }, []);

    return (
    <div id="containter" >
        {isMobile() ? null :  qrCode() }
        
        {isLoading ? <CircularProgress size={50} style={{position: "absolute", top: "32px", "marginLeft": "30%"}} /> : null}
        <model-viewer id="model-viewer" ref={innerRef}
            alt={name}
            src={googleCloudURL + "/" + name}
            ar 
            ar-modes="webxr scene-viewer quick-look" 
            camera-controls
            auto-rotate
            style={{width: "100vw", height: "80vh" }}
        >

            <Button slot="ar-button" variant="outlined" startIcon={<CameraAltIcon />} style= {{position: "absolute", top: "32px", "marginLeft": "30%"}}>
                Visualizar AR
            </Button>
        </model-viewer>
    </div>
    );
}

export default ModelViewer;
