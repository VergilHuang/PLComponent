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
            title={"這是一個demo"}
            className="fix-width"
            onCancel={() => {
                console.log('cancel')
            }}
            onOverlayClcik={() => { }}
        >
            愛新覺羅
            </PLModal>
    </div>
)