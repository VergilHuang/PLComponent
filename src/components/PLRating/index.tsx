import React, { FC, useEffect, useState } from 'react';
import { LevelEnum } from '../../model/enums';
import './style.sass';
type Props = {
    onRating?: (level: number) => void
}

const PLRating: FC<Props> = ({ onRating }) => {

    const [levelState, setLevelState] = useState<LevelEnum>()
    const [hoverLevelState, setHoverLevelState] = useState<LevelEnum>()

    const beActive = (lv: number) => {
        if ((levelState && lv <= levelState) || (hoverLevelState && lv <= hoverLevelState)) {
            return "hl"
        }
        return ""
    }

    return (
        <div className="pl-rating-container">
            <div className="pl-rating-wrapper">
                {
                    Object.keys(LevelEnum)
                        .filter(i => !isNaN(+i))
                        .map(lv => {
                            return (
                                <div key={lv}
                                    className={`star ${beActive(+lv)}`}
                                    onClick={() => {
                                        onRating && onRating(+lv);
                                        setLevelState(+lv);
                                    }}
                                    onMouseEnter={() => setHoverLevelState(+lv)}
                                    onMouseOut={() => setHoverLevelState(undefined)}></div>
                            )
                        })
                }

            </div>
        </div >
    );
};

export default PLRating;