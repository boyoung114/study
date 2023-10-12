import React, { useState, useEffect } from 'react';
import {
  Button,
  Input,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  ButtonGroup
} from '@mui/material';

function PagePromise() {
  const [promise, setPromise] = useState<number>(3);

  const isPositiveP = (num: any) => {
    const executor = (
      resolve: (str: string) => void,
      reject: (error: string) => void
    ) => {
      setTimeout(() => {
        if (typeof num === 'number') {
          //성공 -> resolve
          console.log(num);
          resolve(num >= 0 ? '양수' : '음수');
        } else {
          //실패 -> reject
          reject('주어진 값이 숫자형 값이 아닙니다.');
        }
      }, 2000);
    };

    console.log('exec', executor);
    console.log(new Promise(executor));

    return new Promise(executor);
  };

  isPositiveP('2')
    .then((res) => {
      console.log('작업 성공 : ', res);
    })
    .catch((err) => {
      console.log('작업 실패 : ', err);
    });

  return <div className='App'></div>;
}

export default PagePromise;
