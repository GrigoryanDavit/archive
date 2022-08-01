import { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import CharacterCard from '../../CharacterCard';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { Character, getPeopleThunk } from '../../../store/slices/peopleSlice';
import Loader from '../../Loader';
import { StyledCardsContainer } from './styled';

const Main = () => {
  const peopleStore = useAppSelector((state) => state.people);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  useEffect(() => {
    if (page) {
      dispatch(getPeopleThunk(page));
    }
  }, [page]);
  useEffect(() => {
    if (!page) {
      setSearchParams({ page: '1' });
    }
  }, []);
  return (
    <MainLayout>
      {peopleStore.loading ? <Loader /> : (
        <StyledCardsContainer>
          {peopleStore.people.map((item: Character) => (
            <CharacterCard
              key={item.url}
              character={item}
              onViewMore={() => navigate(`/character/${item.id}`)}
            />
          ))}
        </StyledCardsContainer>
      )}
      <Box padding={5} display="flex" justifyContent="center">
        <Pagination
          page={Number(page)}
          count={peopleStore.pageCount}
          onChange={(e, newPage) => {
            setSearchParams({ page: String(newPage) });
          }}
        />
      </Box>

    </MainLayout>
  );
};

export default Main;
