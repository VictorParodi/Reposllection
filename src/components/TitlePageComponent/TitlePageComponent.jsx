import React from 'react';
import Helmet from 'react-helmet';
import { withCookies } from 'react-cookie';

const TitlePageComponent = (props) => {
    const defaultTitle = 'Reposllection App';
    const { name, lastname } = props.cookies.get('user') || '';

    return (
        <Helmet>
            <title>
                {
                    name && lastname
                    ? `${name} ${lastname} Repos`
                    : defaultTitle
                }
            </title>
        </Helmet>
    );
}

export default withCookies(TitlePageComponent);