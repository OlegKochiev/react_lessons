import React, { useState } from 'react';
import { Box, Button, FormControlLabel, TextField, Typography } from '@mui/material';
import { Divider, Switch } from '@mui/material';
import InputBox from './components/InputBox';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SwitchBox from './components/SwitchBox';

const CreateForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [isProtected, setProtected] = useState(false);
  const [isAdmin, setAdmin] = useState(false);


  const handleSave = () => {
    const userDatas = {
      name,
      email,
      phone,
      isProtected,
      isAdmin
    };
    console.log(userDatas);
  }

  const handleSetName = (userName) => {
    setName(userName);
  }
  const handleSetEmail = (userEmail) => {
    setEmail(userEmail);
  }
  const handleSetPhone = (userPhone) => {
    setPhone(userPhone);
  }
  const handleSetProtected = (userProtected) => {
    setProtected(userProtected);
  }
  const handleSetAdmin = (userAdmin) => {
    setAdmin(userAdmin);
  }

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
        handleSetInput={handleSetName}
      />
      <Divider />

      <InputBox
        inputIcon={
          <LocalPhoneIcon />
        }
        inputLabel='Email'
        handleSetInput={handleSetEmail}
      />
      <Divider />

      <InputBox
        inputIcon={
          <EmailIcon />
        }
        inputLabel='Phone'
        handleSetInput={handleSetPhone}
      />
      <Divider />

      <SwitchBox
        switchName='Protected'
        handleSetSwitch={handleSetProtected}
      />
      <Divider />

      <SwitchBox
        switchName='Admin'
        handleSetSwitch={handleSetAdmin}
      />
      <Divider />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '10px 40px'
        }}>
        <Button
          variant='outlined'>
          Cancel
        </Button>
        <Button
          variant='contained'
          onClick={handleSave}>
          SAVE
        </Button>
      </Box>

    </Box>
  );
};

export default CreateForm;