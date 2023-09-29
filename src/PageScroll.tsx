import React from 'react';
import { useLogin } from './hook/useLogin';
import { useQuery } from '@tanstack/react-query';
import { getMovies } from './apis/api';

function PageScroll() {
  const { isLogin, loginInfo } = useLogin();
  getMovies(1);
  return (
    <>
      {!isLogin ? (
        '로그인 한 후 이용해주십시오.'
      ) : (
        <>
          <div>{loginInfo?.id}님 환영합니다</div>
        </>
      )}
    </>
  );
}

export default PageScroll;
