import { Button } from "@mui/material"

const Index = () => {
    const handleClick = () => {
        fetch('/api/playground')
            .then(res => res.json())
            .then(res => console.log(res))
    }

    return (
        <>
            <Button onClick={handleClick}>Click</Button>
        </>
    )
}

export default Index