import React from 'react';
import './style.sass';
import { action } from '@storybook/addon-actions'
import PLButton from '../../components/PLButton';

export default {
    component: PLButton,
    title: 'PLButton'
};

export const withOutRipple = () => <PLButton needRipple={false} onClick={action('clicked')}>Hello Button</PLButton>;
export const withDefaultRipple = () => <PLButton onClick={action('clicked')}>Hello Button</PLButton>;
export const withColorRipple = () => <PLButton rippleColor={"rgba(0,0,0,0.8)"} onClick={action('clicked')}>Hello Button</PLButton>;