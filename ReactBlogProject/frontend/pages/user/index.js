import Layout from '../../components/Layout';
import Private from '../../components/auth/private';
import Link from 'next/link';

export default function UserIndex() {
    return (
        <Layout>
            <Private>
                <h3>User Dashboard</h3>
            </Private>
        </Layout>
    )
}
