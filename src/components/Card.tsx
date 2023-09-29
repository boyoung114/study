import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ICardType } from '../types/type';

const CardElement = (props: ICardType) => {
  return (
    <Card
      sx={{
        minWidth: 175,
        width: 300,
        margin: '5px 5px 5px 5px',
        float: 'left'
      }}
      variant={'outlined'}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {props.title}
        </Typography>
        <Typography variant='h5' component='div'>
          <img
            src={'https://image.tmdb.org/t/p/w200' + props.src}
            height={200}
          />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {props.release_date} | ⭐{props.vote_average}
        </Typography>
        <Typography variant='body2'>
          {props.overview.slice(0, 55) + '...'}
        </Typography>
      </CardContent>
      {/*<CardActions>*/}
      {/*  <Button size='small'>Learn More</Button>*/}
      {/*</CardActions>*/}
    </Card>
  );
};

export default CardElement;
