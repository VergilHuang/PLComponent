import React, { FC, useReducer, useState } from 'react';
import { setTimeout } from 'timers';
import "./style.sass";
type Props = {

}

const FlipCard: FC<Props> = (props) => {

    const [count, setCount] = useState(0);
    const [flipState, setFlipState] = useState("")
    const [isFliping, setIsFliping] = useState(false);

    const flipDown = () => {
        if (isFliping) return;

        setIsFliping(true);

        setFlipState("go");

        setTimeout(() => {
            setFlipState("")
            count === 9 ? setCount(0) : setCount(pre => pre + 1)
            setIsFliping(false)
        }, 600)
    }

    return (
        <>
            <div className={`flip down ${flipState}`}>
                <div className={`digital front number${count}`}></div>
                <div className={`digital back number${count + 1 === 10 ? 0 : count + 1}`}></div>
            </div>
            <div className="btn-con">
                <button id="btn1" onClick={flipDown}>向下翻 +1</button>
                <button id="btn2">向上翻 -1</button>
            </div>
        </>
    );
};

export default FlipCard;