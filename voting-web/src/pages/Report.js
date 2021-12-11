import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import ReportList from '../components/report/ReportList';
import CustomerListToolbar from '../components/report/Tools';

const Report = () => {
  const students = useSelector((state) => state.report);
  return (
    <>
      <Helmet>
        <title>Report</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar data={students} />
          <Box sx={{ pt: 3 }}>
            <ReportList customers={students} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Report;
