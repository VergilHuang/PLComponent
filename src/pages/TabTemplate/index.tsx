import React, { FC, useState } from 'react';
import PLTab from '../../components/PLTab';
import PLButton from '../../components/PLButton';
import PLTabPanel from '../../components/PLTab/PLTabPanel';
type Props = {
}

const TabTemplate: FC<Props> = (props) => {

    const [activeIndex, setactiveIndex] = useState<string | number>("dt")

    return (
        <div className="tab-template-container">
            <PLTab activeIndex={activeIndex}>
                <PLTabPanel tab={'tab 1'} identifier="vg">
                    123
                </PLTabPanel>
                <PLTabPanel tab={'tab 2'} identifier="dt">
                    321
                </PLTabPanel>
                <PLTabPanel tab={<button onClick={() => console.log('hello world')}>haha</button>} identifier="ab">
                    321daf
                </PLTabPanel>
            </PLTab>

        </div>
    );
};

export default TabTemplate;