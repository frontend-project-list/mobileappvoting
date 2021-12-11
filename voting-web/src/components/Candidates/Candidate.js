import PropTypes from 'prop-types';
import {
  // Avatar,

  Card,
  CardContent,
  Box,
  Button,
  Typography

} from '@material-ui/core';

import Profile from './Profile';
// import candidates from 'src/__mocks__/candidates';

const CandidateCard = ({ candidate, approveCandidate, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'row',
      height: '100%'
    }}
    {...rest}
  >
    <Box sx={{
      width: '40%'
    }}
    >
      <CardContent>
        <Profile candidate={candidate} />
        <Box sx={{
          marginTop: '1.4rem'
        }}
        >
          {candidate.status !== 'APPROVED' && !rest.isResult && (
            <Button size="small" variant="outlined" onClick={() => approveCandidate(candidate)}>
              Approve
            </Button>
          )}
        </Box>
      </CardContent>
    </Box>
    <Box sx={{
      padding: 2,
      width: '60%'
    }}
    >
      {
        rest.isResult ? (
          <h4 style={{ color: '#ff4d4d' }}>
            {candidate?.votes}
            VOTES
          </h4>
        ) : (
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {candidate?.biography}
          </Typography>
        )
      }

    </Box>
  </Card>
);

CandidateCard.propTypes = {
  candidate: PropTypes.object.isRequired,
  approveCandidate: PropTypes.func.isRequired
};

export default CandidateCard;
