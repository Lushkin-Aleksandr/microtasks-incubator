import React from 'react';

type HeaderPropsType = {
    title: string
}

const Header = (props: HeaderPropsType) => {
    return (
        <header>
            {props.title}
        </header>
    );
};

export default Header;