import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerImage from "../../assets/The Dragon News.png"
import { displayDate } from "@/utils/getCurrentDate";
const Header = () => {
    const date = displayDate()
    return (
        <Box className="w-full">
            <Container className="space-y-2 my-2">
                <Image src={headerImage} alt="dragon news" className="mx-auto"/>
                <Typography variant='body2' className='text-gray-500 text-center'>
                   the dragon news. design by mohibulla
                </Typography>
                <Typography variant='body2' className='text-gray-500 text-center'>
                  {date}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;