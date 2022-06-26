import * as React from 'react';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';

const blue = {
  500: '#0E7B5D',
  600: '#11936F',
  700: '#16AC82',
  //#FD99A9, 
};
const red = {
  500: '#FD99A9',
  600: '#F8B2BE',
  700: '#F4A9B5',
  //#FD99A9, 
};

const CustomButton = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[500]};
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const CustomButtonT = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${red[500]};
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${red[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${red[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const btnStyle ={
    marginRight: "20px",
}
export default function UnstyledButtonsSimple({label}) {
  const handlingButton = () =>{
    if(label === '등록 완료'){
      return <CustomButton>{label}</CustomButton>
    }else{
      return  <CustomButtonT>{label}</CustomButtonT>
    }
  }
  return (
    <Stack style={btnStyle} spacing={1} direction="row">
      {handlingButton()}
    </Stack>
  );
}
