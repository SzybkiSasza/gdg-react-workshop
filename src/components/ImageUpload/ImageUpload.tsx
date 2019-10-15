import { Dialog, DialogTitle, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { FunctionComponent, HTMLAttributes, useState } from 'react';
import * as React from 'react';

import './ImageUpload.css';

interface ImageUploadProps extends HTMLAttributes<HTMLDivElement> {
    topPos?: number;
    leftPos?: number;
}

export const ImageUpload: FunctionComponent<ImageUploadProps> = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Fab className='ImageUpload' color='primary' onClick={ () => setOpen(true) }>
                <Add/>
            </Fab>
            <Dialog open={ open }
                onClose={ () => setOpen(false) }>
                <DialogTitle>Choose image to upload</DialogTitle>
            </Dialog>
        </>
    );
};
