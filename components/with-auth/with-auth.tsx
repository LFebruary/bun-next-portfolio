import { useRouter } from "next/router";
import { useAuthContext } from "@/context/authContext";
import { ComponentType, useEffect } from "react";
import React from "react";

const withAuth = (WrappedComponent: ComponentType) => {
    const ComponentWithAuth = (props: any) => {
        const { user, loading } = useAuthContext();
        const router = useRouter();

        useEffect(() => {
            if (!loading && user == null) {
                router.push("/admin/login");
            }
        }, [user, loading, router]);

        // if (loading || user == null) {
        //     return <div>Loading...</div>;
        // }

        return <WrappedComponent {...props} />;
    };

    return ComponentWithAuth;
};

export default withAuth;