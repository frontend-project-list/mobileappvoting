/* eslint-disable react/prop-types */
import {
  Box,
  Button
} from '@material-ui/core';

import { json2excel } from 'js2excel';
import moment from 'moment';

const ReportList = ({ data, ...props }) => {

  const exportData = () => {

    try {

      const results = data.map((result) => ({
        'Voter name': `${result.student.f_name} ${result.student.l_name}`,
        Position: `${result.position.name}`,
        'Voter Regnumber': `${result.student.regNumber}`,
        'voting time': moment(result.createdAt).format('DD/MM/YYYY hh:mm:ss')
      }));
      json2excel({
        data: results,
        name: 'voting-report',
        formateDate: 'yyyy/mm/dd'
      });
    } catch (e) {
      console.error('export error');
    }
  };

  return (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={exportData}
        >
          Export
        </Button>
      </Box>

    </Box>
  );
};

export default ReportList;
