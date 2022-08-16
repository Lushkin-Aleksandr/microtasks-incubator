import React from 'react';

type FooterPropsType = {
    titleForFooter: string
}

const Footer = (props: FooterPropsType) => {
    return (
        <footer>
            {props.titleForFooter}
        </footer>
    );
};

export default Footer;