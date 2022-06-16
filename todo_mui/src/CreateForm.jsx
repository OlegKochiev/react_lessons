import React, { useState } from 'react';
import { Box, FormControlLabel, TextField, Typography } from '@mui/material';
import { Divider, Switch } from '@mui/material';
import InputBox from './components/InputBox';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SwitchBox from './components/SwitchBox';

const CreateForm = () => {

  return (
    <Box
      className='app'
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: 500,
        backgroundColor: 'white',
        boxShadow: 10,
        borderRadius: 1
      }}>

      <Typography
        variant='h5'
        sx={{
          margin: '20px 0 20px 20px'
        }}>
        Create User
      </Typography>
      <Divider />

      <InputBox
        inputIcon={
          <PersonIcon />
        }
        inputLabel='Full Name'
      />
      <Divider />

      <InputBox
        inputIcon={
          <LocalPhoneIcon />
        }
        inputLabel='Email'
      />
      <Divider />

      <InputBox
        inputIcon={
          <EmailIcon />
        }
        inputLabel='Phone'
      />
      <Divider />

      <SwitchBox
        switchName='Protected'
      />
      <Divider />

      <SwitchBox
        switchName='Admin'
      />
      <Divider />



    </Box>
  );
};

export default CreateForm;