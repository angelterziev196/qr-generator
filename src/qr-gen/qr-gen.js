import React from 'react';
import { useQRCode } from 'next-qrcode';

export default function QrCode() {
    const [qrRef] = useQRCode({
        text: 'Enter a valid URL',
        options: {
            level: 'H',
            margin: 10,
            scale: 8,
            width: 256,
            color: {
                dark: '#5868bfff',
                light: '#ffffffff',
            },
        },
    });

    return <canvas ref={qrRef} />;
}
