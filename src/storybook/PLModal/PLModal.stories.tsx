import React from 'react';
import './style.sass';
import PLModal from '../../component/PLModal';

export default {
    component: PLModal,
    title: 'PLModal'
};

export const defaultModal = () => (
    <div>
        <PLModal
            visible={true}
            // needFooter={false}
            // needHeader={false}
            title={"This modal is not done."}
            className="fix-width"
            onCancel={() => {
                console.log('cancel')
            }}
            onOverlayClcik={() => { }}
        >
            RWD Modal frendly to mobile display.
            </PLModal>
    </div>
)