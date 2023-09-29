import React, { useEffect, useState } from 'react';
import { Button, Input } from '@mui/material';

export const useLogin = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [loginInfo, setLoginInfo] = useState<{ id: string; pw: string } | null>(
    null
  );

  useEffect(() => {
    const login = window.sessionStorage.getItem('login');
    setIsLogin(!(login === null));
    setLoginInfo(login === null ? null : JSON.parse(login));
  }, []);

  return { isLogin, loginInfo };
};
