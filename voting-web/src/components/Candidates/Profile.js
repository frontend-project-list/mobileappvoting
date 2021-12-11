/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Typography
} from '@material-ui/core';

const AccountProfile = ({ candidate }) => (

  <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      postion: 'relative',
    }}
  >
    <Avatar
      src={`${process.env.REACT_APP_ASSETS_URL}/${candidate.photo}`}
      sx={{
        height: 100,
        width: 100
      }}
    />
    <Box>
      <Typography
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {candidate?.student?.f_name}

        {candidate?.student?.l_name}
      </Typography>
    </Box>
    <Box>
      <Typography
        color="textSecondary"
        variant="body2"
        style={{
          position: 'absolute',
          marginLeft: '-70px'
        }}
      >
        {candidate?.position?.name}
      </Typography>
    </Box>
  </Box>
);

export default AccountProfile;
