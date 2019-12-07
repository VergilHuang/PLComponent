import React from 'react';
// import { action } from '@storybook/addon-actions'
import PLModal from '.';
import PLButton from '../PLButton';

export default {
    component: PLModal,
    title: 'PLModal'
};

export const defaultModal = () => (
    <div>
        <PLModal
            visible={true}
            title={"這是一個demo"}
            onCancel={() => {
                console.log('cancel')
            }}
            onOverlayClcik={() => { }}>
            愛新覺羅
            </PLModal>
    </div>
)