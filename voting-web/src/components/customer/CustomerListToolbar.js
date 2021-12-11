import {useState} from 'react';
import {
  Box,
  Button,
  // Card,
  // CardContent,
  // TextField,
  // InputAdornment,
  // SvgIcon
  Dialog,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import { importStudents } from 'src/store/actions/user';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
// import { Search as SearchIcon } from 'react-feather';

const CustomerListToolbar = (props) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const getFileToUpload = () => {
    const file = document.getElementById('file').files[0];
    return file;
  };
  const upload = async () => {
    try {
      
      const file = getFileToUpload();
      if (file) {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append('doc', file);
        await importStudents(formData)(dispatch);
        toast.success('Import Successful');
        setIsSubmitting(false);

        setOpen(false);
        // window.location.reload();
      } else {
        alert('Please select a file');
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error(error);
      console.log(error);
    }
  };
  return (
    <>
      {/* dialog */}
      <Dialog
        open={open}
        aria-labelledby="form-dialog-title"
        onClose={() => setOpen(false)}
      >
        <DialogTitle id="form-dialog-title">
          IMPORT STUDENTS
        </DialogTitle>
        <DialogContent>
          <Box p={2}>
            <input id="file" type="file" onChange={getFileToUpload} />
            <Button disabled={isSubmitting} onClick={upload}>{isSubmitting ? 'Uploading ..' : 'Upload'}</Button>
          </Box>
        </DialogContent>
      </Dialog>
      {/* dialog */}
    
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
            onClick={() => {
              setOpen(true);
            }}
          >
            IMPORT STUDENTS
          </Button>
        </Box>
        {/* <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search customer"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box> */}
      </Box>
    </>
  );
};

export default CustomerListToolbar;
