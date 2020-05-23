import { useEffect } from 'react';
import Router from 'next/router';
import { isAuth, getLoggedInUser } from '../../actions/auth';

const Admin = ({ children }) => {
    useEffect(() => {
        var loggedInUser = getLoggedInUser();
        if (!isAuth()) {
            Router.push(`/signin`);
        } else if (loggedInUser != null &&loggedInUser["role"] != 1) {
            Router.push(`/`);
        }
    }, []);
    return <React.Fragment>{children}</React.Fragment>;
};

export default Admin;