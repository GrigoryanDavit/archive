import { Box } from '@mui/material';
import styled from '@emotion/styled';

export const StyledCardsContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:20px;
  &>div {
    width: calc(20% - 20px);
    min-width: 250px;
    height: 300px;
  }
`;
