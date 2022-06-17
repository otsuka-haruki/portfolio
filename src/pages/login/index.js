import { useContext, useRef } from "react";
import { Card, CardContent, Typography, TextField, Button } from "@mui/material";
import { userContext } from "context/userContext";
import Router, { useRouter } from "next/router";

const Index = () => {
    const userNameInput = useRef();
    const passwordInput = useRef();
    const userCtx = useContext(userContext);
    const router = useRouter();

    const login = async () => {
        const userName = userNameInput.current.value;
        const password = passwordInput.current.value;
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, password })
        });
        const { auth } = await response.json();

        if (auth === false) {
            alert('Nah');
            return;
        }

        userCtx.authenticateUser(true);
        router.push('/admin');
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h6">Log In</Typography>
                <TextField fullWidth margin="normal" label="User Name" inputRef={userNameInput} />
                <TextField fullWidth margin="normal" label="Password" inputRef={passwordInput} />
                <Button variant="contained" fullWidth onClick={login}>log in</Button>
            </CardContent>
        </Card>
    )
}

export default Index