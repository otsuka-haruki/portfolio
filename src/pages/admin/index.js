import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Card, Container, CardActionArea, CardContent, Typography } from '@mui/material';
import { v4 } from 'uuid';
import { userContext } from "context/userContext";

const Index = () => {
    const userCtx = useContext(userContext);
    const router = useRouter();

    useEffect(() => {
        const auth = userCtx.auth;
        if (auth === false) {
            alert('nah');
            router.push('/');
            return;
        }
    }, []);

    const menuCards = [
        { title: 'Career Edit', link: '/career/edit' }
    ].map(menu =>
        <Card key={v4()}>
            <Link href={menu.link}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h6">{menu.title}</Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    )

    return (
        <Container maxWidth='md'>
            {menuCards}
        </Container>
    )
}

export default Index