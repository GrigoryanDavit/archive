import React, { FC } from 'react';
import {
  Box,
  Button, Card, CardActions, CardContent, Grid, Typography,
} from '@mui/material';
import { Character } from '../../store/slices/peopleSlice';

type CharacterCardProps = {
    character: Character,
    onViewMore: ()=>void
}

const CharacterCard:FC<CharacterCardProps> = ({ character, onViewMore }) => (
  <Card>
    <Box display="flex" alignItems="center" flexDirection="column" justifyContent="space-between" padding={2} height="100%">
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Grid container spacing={1}>
          <Grid item>
            Skin color:
          </Grid>
          <Grid item>
            {character.skin_color}
          </Grid>
        </Grid>
        <Box>
          <Grid container spacing={1}>
            <Grid item>
              Hair color:
            </Grid>
            <Grid item>
              {character.hair_color}
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={1}>
            <Grid item>
              Birth year:
            </Grid>
            <Grid item>
              {character.birth_year}
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={1}>
            <Grid item>
              Gender:
            </Grid>
            <Grid item>
              {character.gender}
            </Grid>
          </Grid>
        </Box>

      </CardContent>
      <CardActions>
        <Button onClick={onViewMore} size="small" variant="contained" color="primary">More about character</Button>
      </CardActions>
    </Box>
  </Card>
);

export default CharacterCard;
