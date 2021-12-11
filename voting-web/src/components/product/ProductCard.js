/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
import {
  // Avatar,
  // Box,
  // Card,
  // CardContent,
  // Divider,
  Grid,
  // Typography
} from '@material-ui/core';
// import AccessTimeIcon from '@material-ui/icons/AccessTime';
// import GetAppIcon from '@material-ui/icons/GetApp';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CandidateCard from '../Candidates/Candidate';

const ProductCard = ({result}) => {
  
  const doNothing = () => {};
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{result.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        >
          {result.candidates.map((candidate) => (
            <Grid
              item
              key={candidate.id}
              lg={4}
              md={6}
              xs={12}
              
            >
              <CandidateCard isResult approveCandidate={doNothing} candidate={candidate} />
            </Grid>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default ProductCard;
