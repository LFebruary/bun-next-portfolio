import { useRouter } from 'next/router';
import { useAuthContext } from '@/context/authContext';
import React, { ComponentType, useCallback } from 'react';

const withAuth = <P extends JSX.IntrinsicAttributes>(WrappedComponent: ComponentType<P>) => {
    const WithAuthComponent = (props: P) => {
        const { user, loading } = useAuthContext();
        const router = useRouter();

        useCallback(async () => {
            if (!loading && user == null) {
                await router.push('/admin/login');
            }
        }, [user, loading, router]);

        // if (loading || user == null) {
        //     return <div>Loading...</div>;
        // }

        return <WrappedComponent {...props} />;
    };

    WithAuthComponent.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

    return WithAuthComponent;
};

function getDisplayName<P>(WrappedComponent: ComponentType<P>) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuth;
