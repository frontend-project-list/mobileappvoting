import {
  Box,
  Button,
  Card,
  CardContent,
} from '@material-ui/core';
import { useState } from 'react';

const CustomerListToolbar = (props) => {
  const [active, setActive] = useState(1);
  return (
    <Box {...props}>
   
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
            >
              <Button onClick={() => setActive(1)} color={active === 1 ? 'error' : 'primary'}>
                All
              </Button>
              <Button onClick={() => setActive(2)} color={active === 2 ? 'error' : 'primary'}>
                Approved
              </Button>
              <Button onClick={() => setActive(3)} color={active === 3 ? 'error' : 'primary'}>
                Pending
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default CustomerListToolbar;
