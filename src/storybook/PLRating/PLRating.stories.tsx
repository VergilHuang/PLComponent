import React, { FC, useState } from "react";
import PLRating from '../../components/PLRating'
import Reminder from '../../components/Reminder';
import { LevelEnum } from '../../model/enums';


export default {
    component: PLRating,
    title: 'PLRating'
}

export const defaultRating: FC = () => {
    const [lv, setLv] = useState<LevelEnum>()
    return (
        <div>
            <Reminder >
                level is : {lv}
            </Reminder>
            <PLRating onRating={(lv) => setLv(lv)} />
        </div>
    )
}