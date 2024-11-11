import React from 'react';
import './CardStyle.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

// Image imports
import iPhoneB from '../Images/iphoneB.png';
import iPhoneG from '../Images/iphoneG.png';
import iPhoneY from '../Images/iphoneY.png';
import iPhoneP from '../Images/iphoneP.png';
import { Button } from '@mui/material';

const cardData = [
    { image: iPhoneB, title: "iPhone Black", description: "A description of the black iPhone model." },
    { image: iPhoneG, title: "iPhone Green", description: "A description of the green iPhone model." },
    { image: iPhoneY, title: "iPhone Yellow", description: "A description of the yellow iPhone model." },
    { image: iPhoneP, title: "iPhone Pink", description: "A description of the pink iPhone model." }
];

export default function ActionAreaCard() {
    return (
        <div className='card-main'>
            {cardData.map((card, index) => (
                <Card sx={{ maxWidth: 400, marginBottom: 2 }} key={index}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="400"
                            image={card.image}
                            alt={card.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {card.description}
                            </Typography>

                            <Button>Buy Now</Button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    );
}
