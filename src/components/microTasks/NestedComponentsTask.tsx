import React from 'react';
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";

const NestedComponentsTask = () => {
    return (
        <div>
            <Header title='New Header'/>
            <Body titleForBody='New Body'/>
            <Footer titleForFooter={'New Footer'}/>
        </div>
    );
};

export default NestedComponentsTask;