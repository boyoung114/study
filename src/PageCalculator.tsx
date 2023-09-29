import React, { useState } from 'react';
import { useLogin } from './hook/useLogin';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getMovies } from './apis/api';
import CardElement from './components/Card';
import InfiniteScroll from 'react-infinite-scroller';
import { IResultType } from './types/type';
import {
  Button,
  Box,
  Typography,
  CircularProgress,
  Input
} from '@mui/material';

function PageCalculator() {
  //입력 input
  const [value, setValue] = useState<string>('');
  //선택한 연산
  const [calculator, setCalculator] = useState<string>('');
  //입력 input 임시 저장
  const [tempValue, setTempValue] = useState<string>('');
  //연산 클릭 후 flag
  const [firstFlag, setFirstFlag] = useState<boolean>(false);

  const numCollect: (number | string)[][] = [
    ['ac', 'del', '%', '/'],
    [7, 8, 9, 'x'],
    [4, 5, 6, '+'],
    [1, 2, 3, '-'],
    [0, '.', '=']
  ];

  const handleOnClick = (number: number) => {
    //연산하지 않을 때
    if (calculator === '') {
      const string = value + String(number);
      setValue(string);
    } else {
      if (tempValue) {
        if (firstFlag) {
          setValue(String(number));
          setFirstFlag(false);
        } else {
          const string = value + String(number);
          setValue(string);
        }
      }
    }
  };

  console.log({ value, tempValue, firstFlag });

  const handleOnClickCal = (cal: string) => {
    const getResult = () => {
      let result: number = 0;
      if (calculator === 'x') {
        result = Number(value) * Number(tempValue);
      }
      if (calculator === '-') {
        result = Number(value) - Number(tempValue);
      }
      if (calculator === '+') {
        result = Number(value) + Number(tempValue);
      }
      if (calculator === '/') {
        result = Number(value) / Number(tempValue);
      }
      if (calculator === '%') {
        result = Number(value) % Number(tempValue);
      }
      return result;
    };

    if (cal === 'del' || cal === 'ac') {
      setValue(cal === 'del' ? value.slice(0, -1) : '');
      if (cal === 'ac') {
        setCalculator('');
      }
    } else {
      if (cal === '=') {
        setValue(String(getResult()));
      } else {
        //연산 처음 누른 경우
        if (tempValue === '') {
          //연산 저장
          setCalculator(cal);
          //임시 저장에 value 저장
          setTempValue(value);
          //연산 눌렀을 때
          setFirstFlag(true);
        } else {
          setTempValue(String(getResult()));
          setValue(String(getResult()));
          setCalculator(cal);
          setFirstFlag(true);
        }
      }
    }
  };

  return (
    <>
      <Box>
        <Input
          value={value}
          onChange={(e) => {
            setValue(e.target.value.replace(/[^0-9]/g, ''));
          }}
          sx={{ marginLeft: 1, width: 210 }}
        />
        {numCollect.map((num, index) => {
          const numbers = num.map((n, i) => {
            const margin = n === 0 ? 10 : 1;
            return (
              <Button
                variant={
                  i + 1 === num.length || (index === 0 && i === 2)
                    ? 'contained'
                    : 'outlined'
                }
                key={n + 'num'}
                sx={{
                  marginLeft: margin,
                  marginTop: 1
                }}
                onClick={() => {
                  if (typeof n === 'number') {
                    handleOnClick(n);
                  } else {
                    handleOnClickCal(n);
                  }
                }}
              >
                {n}
              </Button>
            );
          });

          return <Box key={index + 'column'}>{numbers}</Box>;
        })}
      </Box>
    </>
  );
}

export default PageCalculator;
