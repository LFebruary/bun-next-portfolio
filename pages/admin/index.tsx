'use client'

import withAuth from "@/components/with-auth";

function ProtectedPage() {
    return (<h1>Only logged in users can view this page</h1>);
}

export default withAuth(ProtectedPage);
