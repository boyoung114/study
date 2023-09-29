import React, { JSX, useEffect, useState } from 'react';
import { Button, Input, Typography } from '@mui/material';
import { useInput } from './hook/useInput';
import { useLogin } from './hook/useLogin';
import { useNavigate } from 'react-router-dom';

function PageLogin() {
  const id = useInput();
  const pw = useInput();
  const { isLogin, loginInfo } = useLogin();

  const handleLogin = () => {
    window.sessionStorage.setItem(
      'login',
      JSON.stringify({ id: id.value, pw: id.value })
    );
  };

  const handleLogOut = () => {
    window.sessionStorage.removeItem('login');
  };

  return (
    <>
      {!isLogin ? (
        <>
          id: <Input value={id.value} onChange={id.onChangeNotEmpty} />
          <br />
          pw:
          <Input
            type={'password'}
            value={pw.value}
            onChange={pw.onChangeNotEmpty}
          />
          <br />
          <Button
            onClick={() => {
              handleLogin();
              location.reload();
            }}
            variant={'outlined'}
            disabled={id.value.length < 1 || pw.value.length < 1}
          >
            로그인
          </Button>
        </>
      ) : (
        <>
          <Typography> {loginInfo?.id}님 환영합니다.</Typography>
          <br />
          <Button
            onClick={() => {
              handleLogOut();
              location.reload();
            }}
            variant={'outlined'}
          >
            로그아웃
          </Button>
        </>
      )}
    </>
  );
}

export default PageLogin;
