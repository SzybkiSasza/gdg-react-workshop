import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import * as React from 'react';
import { ClassAttributes } from 'react';

import './ImageUpload.css';

interface ImageUploadProps {
    topPos: number;
    leftPos: number;
}

class ImageUpload extends React.Component<ClassAttributes<ImageUploadProps>> {
    public render(): JSX.Element {
        return (
            <Fab className='ImageUpload' color='primary'>
                <Add/>
            </Fab>
        );
    }
}

export default ImageUpload;
