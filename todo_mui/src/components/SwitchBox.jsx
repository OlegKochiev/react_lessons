import React from 'react';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Box, FormControlLabel, Switch } from '@mui/material';

const SwitchBox = ({ switchName }) => {
  return (
    <Box
      sx={{
        display: 'flex'
      }}>
      <AddModeratorIcon
        sx={{
          alignSelf: 'center',
          marginLeft: '10px'
        }}
      />
      <FormControlLabel
        control={<Switch sx={{ m: 1 }} defaultChecked />}
        label={switchName}
        labelPlacement='start'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '100%',
          width: '100%',
        }}
      />
    </Box>
  );
};

export default SwitchBox;