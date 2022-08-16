import React from 'react';

type BodyPropsType = {
    titleForBody: string
}

const Body = (props: BodyPropsType) => {
    return (
        <div>
            {props.titleForBody}
        </div>
    );
};

export default Body;