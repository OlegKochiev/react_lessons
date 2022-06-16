import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { Divider } from '@mui/material';
import InputBox from './components/InputBox';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


const CreateForm = () => {

  const [dateTimePickerValue, setDateTimePickerValue] = useState(
    new Date('2022-08-18')
  )

  const handleDateTimePicker = () => {
    console.log('hi');
  }

  return (
    <Box
      className='app'
      component="form"
      sx={{
        maxWidth: 500,
        backgroundColor: 'white',
        boxShadow: 10,
        borderRadius: 1
      }}>

      <Typography
        variant='h5'
        sx={{
          marginLeft: 2,
          marginRight: 2
        }}>
        Create User
      </Typography>

      <Divider />

      <InputBox
        inputIcon={
          <PersonIcon
            fontSize='large'
          />
        }
        inputLabel='Full Name'
      />
      <Divider />

      <InputBox
        inputIcon={
          <LocalPhoneIcon
            fontSize='large'
          />
        }
        inputLabel='Email'
      />
      <Divider />

      <InputBox
        inputIcon={
          <EmailIcon
            fontSize='large'
          />
        }
        inputLabel='Phone'
      />
      <Divider />


      {/* <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: '90%' }}
        InputLabelProps={{
          shrink: true,
        }}
      /> */}
      {/* <DesktopDatePicker
        label="Date desktop"
        inputFormat="MM/dd/yyyy"
        value={dateTimePickerValue}
        onChange={handleDateTimePicker}
        renderInput={(params) => <TextField {...params} />}
      /> */}

    </Box>
  );
};

export default Cre