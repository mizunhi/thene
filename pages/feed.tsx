
import Layout from '../components/layout'
import Protected from '../components/protected'
export default function FeedPage() {
    return (
        <Layout>
            <Protected>
                feed page
            </Protected>
        </Layout>
    )
}