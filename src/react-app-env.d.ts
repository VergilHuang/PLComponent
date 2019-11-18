/// <reference types="react-scripts" />

interface Window {
    bindResizeStorage: {
        [key: string]: () => void;
    };
    bindTimerStorage: {
        [key: string]: number | NodeJS.Timeout
    };
}
