import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const Footer = () => {
    const pages = [
        {
            route: "Home",
            pathname: "/"
        },
        {
            route: "Pages",
            pathname: "/pages"
        },
        {
            route: "Category",
            pathname: "/category"
        },
        {
            route: "News",
            pathname: "/news"
        },
        {
            route: "About",
            pathname: "/about"
        },
        {
            route: "Contact",
            pathname: "/contact"
        },
    ];
    return (
        <Box className="bg-black px-2 py-2" direction={"row"} sx={{
            "& svg": {
                color: "white"
            }
        }}>
            <Container>
                <Box className='w-full text-center'>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                </Box>
                <Box className="text-center">
                    {pages.map((page) => (
                        <Link key={page} href={page.pathname}>
                            <Button className='text-white'>
                                {page.route}
                            </Button>
                        </Link>
                    ))}
                </Box>
                <Typography className='text-white text-center'>
                    @2023 the dragon news. design by mohibulla
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;