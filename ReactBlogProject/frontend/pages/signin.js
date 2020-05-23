import Layout from '../components/Layout';
import SigninComponent from '../components/auth/SigninComponent'

export default function signin() {
    return (
    <Layout>
        <div className="container-fluid">
            <h2 className="text-center pt-4 pb-4">Sign In</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <SigninComponent />
                </div>
            </div>
        </div>
    </Layout>
    )
}
