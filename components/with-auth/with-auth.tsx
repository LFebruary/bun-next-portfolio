import {useRouter} from "next/router";
import {useAuthContext} from "@/context/authContext";
import React, {ComponentType, useCallback} from "react";

const withAuth = (WrappedComponent: ComponentType) => {
    return (props: any) => {
        const {user, loading} = useAuthContext();
        const router = useRouter();

        useCallback(async () => {
            if (!loading && user == null) {
                await router.push("/admin/login");
            }
        }, [user, loading, router]);

        // if (loading || user == null) {
        //     return <div>Loading...</div>;
        // }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;