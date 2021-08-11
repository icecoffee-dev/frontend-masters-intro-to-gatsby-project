import React from 'react'
import { Link } from 'gatsby'
import Layout from './Layout'


function PostLayout({ children, ...props }) {
    return (
        <Layout>
            {children}
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </Layout>
    );
}

export default PostLayout;