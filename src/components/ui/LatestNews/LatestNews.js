import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import topNews from "../../../assets/top-news.png"
import Image from 'next/image';
const LatestNews = () => {
    return (
        <Box className="my-5">
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNews} alt='top-news' width={"800"} />
                    </CardMedia>
                    <CardContent>
                        <p className='w-[100px] rounded bg-red-500 p-1 text-white'>Technology</p>
                        <Typography gutterBottom variant="h5" component="div">
                            Bitcoin climbs as Elon Musk says Likly to accept it Again
                        </Typography>
                        <Typography gutterBottom>
                            By Mohebulla Miazi - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Item>1</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>2</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>3</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>4</Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LatestNews;