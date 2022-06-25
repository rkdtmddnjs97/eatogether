import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useState } from "react";

export default function AlertDialogSlide({open, setOpen}){
  //const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"알림"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div>현재 A님과 BBQ 배달비 3빵이 가능해요!</div>
            <div>참여하기를 기존 주문자님께 알린 후 주문을 진행할까요?</div>
            주문을 진행하지 않는다면 18:00까지 배달비 2빵을 기다려요!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>배달비 3빵 기다리기</Button>
          <Button onClick={handleClose}>배달비 2빵으로 주문하기</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
