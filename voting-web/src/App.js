import { useDispatch } from 'react-redux';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { getAllCandidates, getReport} from './store/actions/candidates';
import { getAllStudents, getAllResults } from './store/actions/user';

const App = () => {
  const content = useRoutes(routes);
  const dispatch = useDispatch();
  if (localStorage.getItem('token')) {
    getAllCandidates()(dispatch);
    getAllStudents()(dispatch);
    getAllResults()(dispatch);
    getReport()(dispatch);
  }

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {content}
        <ToastContainer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
