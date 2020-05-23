import { useState, useEffect } from 'react';
import { signin, authenticate, isAuth ,getLoggedInUser } from '../../actions/auth';
import Router from 'next/router';
import Link from 'next/link';

const SigninComponent = () => {
    const [values, setValues] = useState({
        email: 'sss@sss.com',
        password: 'ssssss',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { email, password, error, loading, message, showForm } = values;

    const handleSubmit = e => {
        e.preventDefault();
        console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { email, password };

        signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                var flag = authenticate(data);
                var loggedInUser = getLoggedInUser();
                if (flag && loggedInUser !== null && loggedInUser["role"] == 1) {
                    Router.push(`/admin`);
                } else {
                    Router.push(`/user`);
                }
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

    const signinForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        className="form-control"
                        placeholder="Type your email"
                    />
                </div>

                <div className="form-group">
                    <input
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        className="form-control"
                        placeholder="Type your password"
                    />
                </div>

                <div>
                    <button className="btn btn-primary">Signin</button>
                </div>
            </form>
        );
    };

    return (
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signinForm()}
            <br />
            <Link href="/auth/password/forgot">
                <a className="btn btn-outline-danger btn-sm">Forgot password</a>
            </Link>
        </React.Fragment>
    );
};

export default SigninComponent;