import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button } from '@mui/material';

const MainLayout:FC<{children: ReactNode}> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar>
        <Box width="auto" padding={1}>
          <Button
            onClick={() => navigate('/')}
            variant="contained"
            color="secondary"
          >
            Go to Main
          </Button>
        </Box>

      </AppBar>
      <Box padding="80px 60px">
        {children}
      </Box>

    </div>

  );
};

export default MainLayout;
