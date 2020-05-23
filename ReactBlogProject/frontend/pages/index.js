import Layout from '../components/Layout';
import Link  from 'next/link';

export default function Index() {
  return (
      <Layout>
        <h1>Hello from Index Next.js</h1>
        <Link href="/signup">SignUp</Link>
      </Layout>
  );
}
