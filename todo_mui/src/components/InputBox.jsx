import React from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';

const InputBox = ({ inputIcon, inputLabel, handleSetInput }) => {

  const handleInput = (e) => {
    const value = e.target.value;
    handleSetInput(value);
  }

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        padding: 1.3
      }}>

      {inputIcon}

      <TextField
        required
        label={inputLabel}
        variant="standard"
        style={{ width: '90%' }}
        onChange={handleInput}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CreateIcon
                sx={{
                  marginRight: '10px'
                }}
              />
            </InputAdornment>
          )
        }}>
      </TextField>
    </Box >
  );
};

export default InputBox;