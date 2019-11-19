import React, { FC } from 'react';
import PLModal from '../../component/PLModal';
type Props = {

}

const ModelTemplate: FC<Props> = (props) => {

    return (
        <div className="model-template-container">
            <div className="container">
                <div className="col-xs-12 center">
                    <button onClick={() => { }}>
                        open
                    </button>
                </div>
            </div>
            {/* <PLModal visible={true} /> */}
        </div>
    );
};

export default ModelTemplate;