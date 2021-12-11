import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { approve } from 'src/store/actions/candidates';
import { toast } from 'react-toastify';
// import CandidatesListToolbar from '../components/Candidates/ToolBar';
import CanditeCard from '../components/Candidates/Candidate';

// import candidatesList from '../__mocks__/candidates';

const CustomerList = () => {
  const store = useSelector((state) => state);
  const { candidates } = store;
  const candidatesList = candidates;
  const dispatch = useDispatch();
  const approveCandidate = async (candidate) => {
    try {
      await approve(candidate.id)(dispatch);
      toast.success('Candidate approved successfully');
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error('Error approving candidate');
    }
  };

  return (
    <>
      <Helmet>
        <title>Candidates </title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          {/* <CandidatesListToolbar /> */}
          <Box sx={{ pt: 3 }}>
            <Box sx={{ pt: 3 }}>
              <Grid
                container
                spacing={3}
              >
                {candidatesList.map((candidate) => (
                  <Grid
                    item
                    key={candidate.id}
                    lg={4}
                    md={6}
                    xs={12}
                  >
                    <CanditeCard approveCandidate={approveCandidate} candidate={candidate} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CustomerList;
