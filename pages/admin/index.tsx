import DefaultLayout from "@/components/layouts/default-layout"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

export default function Admin() {
    return (
        <DefaultLayout>
            <form
                autoComplete="off">
                <TextField id="outlined-basic" label="Username" type='email' variant="outlined" margin="normal" />
                <br />
                <TextField id="outlined-basic" label="Password" type='password' variant="outlined" margin="normal" />
            </form>
        </DefaultLayout>
    )
}