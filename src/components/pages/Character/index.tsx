import { useParams } from 'react-router';
import React, { useEffect } from 'react';
import {
  Box, Card, CardContent, Divider, Grid, Typography,
} from '@mui/material';
import MainLayout from '../../layouts/MainLayout';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { getCharacterThunk } from '../../../store/slices/characterSlice';
import Loader from '../../Loader';
import { getPrettifiedKeys, isDate, isUrl } from '../../../utils';
import { Film } from '../../../store/types';

const Character = () => {
  const dispatch = useAppDispatch();
  const characterStore = useAppSelector((state) => state.character);

  const character = characterStore.data;
  const { id } = useParams<{ id:string }>();
  const characterKeys = getPrettifiedKeys(character);
  const planetKeys = getPrettifiedKeys(character?.planetData ?? {});
  useEffect(() => {
    if (id) {
      dispatch(getCharacterThunk(id));
    }
  }, [id]);

  if (characterStore.loading || !character) return <Loader />;

  const renderValue = (value:string) => {
    if (isUrl(value)) {
      return <a href={value} target="_blank" rel="noreferrer">Link</a>;
    }
    if (isDate(value)) return new Date(value).toDateString();

    return value;
  };

  return (
    <MainLayout>
      <Box>
        <Typography gutterBottom variant="h2" component="div" textAlign="center">
          {character.name}
        </Typography>
      </Box>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" textAlign="center">
            Main information
          </Typography>
          <Box fontSize={22}>
            {characterKeys.map((item, index) => {
              const value = Object.values(character)[index];
              if (typeof value !== 'string') return null;
              return (
                <Grid container spacing={1}>
                  <Grid item>
                    {item}
                    :
                  </Grid>
                  <Grid item>
                    {renderValue(value)}
                  </Grid>
                </Grid>
              );
            })}
          </Box>
        </CardContent>
      </Card>
      <Divider style={{ margin: '30px 0' }} />
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" textAlign="center">
            Films
          </Typography>
          <Box>
            {character.filmsData.map((item:Film) => (
              <Grid container spacing={1} fontSize={22}>
                <Grid item>
                  {item.title}
                </Grid>
              </Grid>
            ))}
          </Box>
        </CardContent>
      </Card>
      <Divider style={{ margin: '30px 0' }} />
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" textAlign="center">
            Planet
          </Typography>
          <Box fontSize={22}>
            {planetKeys.map((item:string, index:number) => {
              const value = Object.values(character?.planetData)[index];
              if (typeof value !== 'string') return null;
              return (
                <Grid container spacing={1}>
                  <Grid item>
                    {item}
                    :
                  </Grid>
                  <Grid item>
                    {renderValue(value)}
                  </Grid>
                </Grid>
              );
            })}
          </Box>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Character;
