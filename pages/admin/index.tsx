'use client'

import DefaultLayout from "@/components/layouts/default-layout";
import withAuth from "@/components/with-auth";
import projects from "@/data/projects.data";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const projectColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 64 },
    { field: 'name', headerName: 'name', width: 192 },
    { field: 'description', headerName: 'Description', width: 512 },
];

let id = 0;

const projectRows = projects.map((project) => {
    id++;
    return {
        id: id,
        name: project.name,
        description: project.description,
    };
});

function ProtectedPage() {
    return (

        <DefaultLayout>
            <Typography variant="h3">
                Admin
            </Typography>
            <DataGrid
                rows={projectRows}
                columns={projectColumns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </DefaultLayout>
    );
}

export default withAuth(ProtectedPage);
