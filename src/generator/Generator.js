import React from 'react';
import { useQRCode } from 'next-qrcode';

export default function QrCode(props) {
    const { Canvas } = useQRCode();

    return (
        <Canvas
            text={props.text}
            options={{
                type: 'image/jpeg',
                quality: 0.3,
                level: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                color: {
                    dark: '#000000',
                    light: '#ffffff',
                },
            }}
        />
    );
}
