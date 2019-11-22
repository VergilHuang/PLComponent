import React, { FC, useState } from 'react';
import PLTab from '../../component/PLTab';
import PLButton from '../../component/PLButton';
import PLTabPanel from '../../component/PLTab/PLTabPanel';
type Props = {
}

const TabTemplate: FC<Props> = (props) => {

    const [activeIndex, setactiveIndex] = useState<string | number>("dt")

    return (
        <div className="tab-template-container">
            <PLButton onClick={() => setactiveIndex('dt')} >
                转换
            </PLButton>
            <PLTab activeIndex={activeIndex}>
                <PLTabPanel tab={'tab 1'} identifier="vg">
                    123
                </PLTabPanel>
                <PLTabPanel tab={'tab 2'} identifier="dt">
                    321
                </PLTabPanel>
                <PLTabPanel tab={<button onClick={() => console.log('heihei')}>haha</button>} identifier="dt">
                    321
                </PLTabPanel>
            </PLTab>

        </div>
    );
};

export default TabTemplate;