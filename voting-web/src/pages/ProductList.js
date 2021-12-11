import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Button
} from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import ResultsCard from '../components/product/ProductCard';

import { publishResults } from '../store/actions/results';

const ProductList = () => {
  const { results, published } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <Helmet>
        <title>Results</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
        <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={() => publishResults(published)(dispatch)}
        >
          {!published ? 'PUBLISH RESULTS' : 'UN PUBLISH RESULTS'}

        </Button>
      </Box>

        </Box>
          <Box sx={{ pt: 3 }}>
            {results.map((result) => (
              <ResultsCard key={result.id} result={result} />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ProductList;
