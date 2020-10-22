import React, { useEffect, FC, useRef } from 'react'
import './style.sass'
type Props = {
    needRipple?: boolean,
    rippleColor?: string,
} & React.ButtonHTMLAttributes<any>

const PLButton: FC<Props> = ({ needRipple = true, rippleColor = "#fff", children, ...otherProps }) => {
    const btnRef = useRef<any>();


    useEffect(() => {
        if (!needRipple) return

        const btnEle: HTMLButtonElement = btnRef.current
        btnEle.addEventListener('click', addRipple, false)
        btnEle.addEventListener("webkitAnimationEnd", removeRipple, false);
        btnEle.addEventListener("animationend", removeRipple, false);
        btnEle.addEventListener("oanimationend", removeRipple, false);
        return () => {
            btnEle.removeEventListener("webkitAnimationEnd", removeRipple, false);
            btnEle.removeEventListener("animationend", removeRipple, false);
            btnEle.removeEventListener("oanimationend", removeRipple, false);
        };
    }, [])

    const addRipple = (e: MouseEvent) => {
        const btnEle: HTMLButtonElement = btnRef.current
        // console.log(`${e.pageY} ${e.pageX}`)
        const { offsetTop, offsetLeft } = calcOffsetPosition(btnEle);
        const ripple = document.createElement('div');
        ripple.className = "ripple";
        ripple.style.top = `${e.pageY - offsetTop}px`
        ripple.style.left = `${e.pageX - offsetLeft}px`
        ripple.style.backgroundColor = rippleColor
        btnEle.appendChild(ripple)
    }

    const removeRipple = () => {
        const btnEle: HTMLButtonElement = btnRef.current
        // console.log('animate stop')
        const removeEle = btnEle.querySelector('.ripple')
        if (removeEle) {
            btnEle.removeChild(removeEle)
        }
    }

    const calcOffsetPosition = (ele: HTMLElement) => {
        let offsetTop = ele.offsetTop,
            offsetLeft = ele.offsetLeft,
            offsetParent: HTMLElement = ele;
        while (offsetParent.offsetParent) {
            offsetTop += (offsetParent.offsetParent as HTMLElement).offsetTop;
            offsetLeft += (offsetParent.offsetParent as HTMLElement).offsetLeft;
            offsetParent = (offsetParent.offsetParent as HTMLElement)
        }
        return {
            offsetTop,
            offsetLeft
        }
    }

    return (
        <button
            ref={btnRef}
            {...otherProps}
            className={`pl-btn-container ${otherProps.className || ""}`}
        >
            {children}
        </button>
    )
}

export default PLButton