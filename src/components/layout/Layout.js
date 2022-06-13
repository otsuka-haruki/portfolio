import Container from "./Container";
import AppBar from "./AppBar";

const Layout = ({ children }) => {
    return (
        <>
            <AppBar />
            <Container>
                {children}
            </Container>
        </>
    )
}

export default Layout