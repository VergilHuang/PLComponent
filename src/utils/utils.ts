import moment from 'moment';

window.bindResizeStorage = {};
window.bindTimerStorage = {};

function null2Empty(text: string | null | undefined) {
    if (text === null || text === undefined || text.length === 0) {
        return ""
    }
    return text;
}

const create_uuid = () => {
    var d = Date.now();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

// unix in second
const unixTimeFormat = (unix: number, format?: string) => {
    return moment.unix(unix).format(format || 'YYYY-MM-DD HH:mm:ss');
}

// dateString转换
const timeStringFormat = (timeString: string, format?: string) => {
    if (typeof timeString !== 'string') return

    return moment(timeString).format(format || "YYYY-MM-DD HH:mm:ss");
}

// 计算经过多少时间，注意为区间计算，非精准时间
const timeStringFromNow = (timeString: string) => {
    if (typeof timeString !== 'string') return

    return moment(timeString).fromNow();

}

// 取得enum的value
const getEnumValue = (e: Object) => {
    return Object.keys(e).filter(key => Number.isInteger(+key)).map(key => +key);
}

// 取得enum的key(key不能为可转化为数字的type)
const getEnumKeys = (e: Object) => {
    return Object.keys(e).filter(key => isNaN(+key));
}

// resize事件绑定注册器
const bindResizeRegister = (register: () => void, id: string) => {
    window.bindResizeStorage = {
        ...window.bindResizeStorage,
        [id]: register
    }
    window.onresize = function () {
        Object.values(window.bindResizeStorage).forEach((register) => register())
    };
}

// resize事件清理
const cleanUpResizeRegister = (id: string) => {
    if (id in window.bindResizeStorage) {
        delete window.bindResizeStorage[id];
    }
}

const bindTimerRegister = (register: number | NodeJS.Timeout, id: string) => {
    window.bindTimerStorage = {
        ...window.bindTimerStorage,
        [id]: register
    }
}

const cleanUpTimerRegister = (id: string) => {
    if (id in window.bindTimerStorage) {
        window.clearTimeout((window.bindTimerStorage[id] as number));
        delete window.bindTimerStorage[id];
    }
}
const $$ = {
    null2Empty,
    create_uuid,
    unixTimeFormat,
    timeStringFormat,
    timeStringFromNow,
    getEnumValue,
    getEnumKeys,
    bindResizeRegister,
    cleanUpResizeRegister,
    bindTimerRegister,
    cleanUpTimerRegister
}

export default $$