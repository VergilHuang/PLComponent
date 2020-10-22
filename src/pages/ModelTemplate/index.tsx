import React, { FC, useState } from 'react';
import PLModal from '../../components/PLModal';
type Props = {

}

const ModelTemplate: FC<Props> = (props) => {

    const [Open, setOpen] = useState(false)
    return (
        <div className="model-template-container">
            <div className="container">
                <div className="col-xs-12 center">
                    <button onClick={() => setOpen(true)}>
                        open
                    </button>
                </div>
            </div>
            <PLModal
                visible={Open}
                onCancel={() => {
                    console.log('cancel')
                    setOpen(false)
                }}
                onOverlayClcik={() => setOpen(false)}>
                愛新覺羅
            </PLModal>
        </div>
    );
};

export default ModelTemplate;