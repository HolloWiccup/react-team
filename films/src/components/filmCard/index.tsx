import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { FilmCardTypes } from '../../types_interfaces/filmCardProps';
import LikeButton from '../likeButton';

export default function FilmCard({title, image, rating, id} : FilmCardTypes ): JSX.Element {

    return (
        <Card sx={{width: '30%', margin: '0 0em 1em 1em' }}>
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="Film card"
            />
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                {title} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <span>Rating: {rating}</span>
                </Typography>
                {/* <LikeButton movieId={id.toString()}/> */}
                <Link to={`/film/${id}`}>
                    <IconButton>
                        <InfoIcon/>
                    </IconButton>
                </Link>
            </CardContent>
        </Card>
    );
}