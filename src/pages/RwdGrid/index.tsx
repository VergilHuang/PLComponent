import React, { FC } from 'react';
type Props = {

}

const RwdGrid: FC<Props> = (props) => {

    return (
        <div className="container black">
            <div className="col-xs-12 yellow">1</div>
            <div className="col-xs-12 col-sm-6 container">
                <div className="col-xs-12 col-sm-12 yellow">2</div>
                <div className="col-xs-12 col-sm-12 yellow">3</div>
            </div>
            <div className="col-xs-12 col-sm-6 container">
                <div className="col-xs-12 col-sm-6 col-md-9 yellow">4</div>
                <div className="col-xs-12 col-sm-6 col-md-3 yellow">5</div>
            </div>
        </div>
    )
};

export default RwdGrid;