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
import Timer from './PageTimer2';
import moment from 'moment';

function PageTimer() {
  const [endTime, setEndTime] = useState<number>(0);
  const [select, setSelect] = useState<string>('s');
  const [time, setTime] = useState<number>(0);
  const [inputTime, setInputTime] = useState<number>(0);
  const [flag, setFlag] = useState<boolean>(false);

  //시간 플러스
  const handlePlusTime = () => {
    const new_time =
      inputTime * (select === 'h' ? 3600 : select === 'm' ? 60 : 1);
    setTime(time + new_time);
  };

  //시간 마이너스
  const handleMinusTime = () => {
    const new_time =
      inputTime * (select === 'h' ? 3600 : select === 'm' ? 60 : 1);
    setTime(time - new_time > 0 ? time - new_time : 0);
  };

  //남은 시간 계산
  const handleGetLeftTime = () => {
    const now = new Date().getTime();
    return endTime - now;
  };

  let timer: any;

  useEffect(() => {
    console.log(flag);
    if (flag) {
      timer = setInterval(() => {
        const leftTime = handleGetLeftTime();
        setTime(Math.ceil(leftTime / 1000));
      }, 1000);

      console.log(time);
      if (time <= 0) {
        setFlag(false);
        setEndTime(0);
        clearInterval(timer);
      }
    }

    return () => {
      clearInterval(timer);
      console.log('초기화', flag);
    };
  }, [flag, time]);

  return (
    <div className='App'>
      {/*<Timer duration={5} />*/}
      <Box mt={2} textAlign={'center'}>
        <Typography
          variant='h2'
          component='h2'
          fontWeight={400}
          sx={{ marginBottom: '5px' }}
          color={'#1976d2'}
        >
          타이머
        </Typography>
        <Input sx={{ marginRight: '10px' }} value={time} />초
        <Box mt={2}>
          <Input
            sx={{ marginRight: '10px', width: '100px' }}
            value={inputTime}
            onChange={(event) => {
              setInputTime(Number(event.target.value.replace(/[^0-9]/g, '')));
            }}
          />
          <FormControl sx={{ marginRight: '3px' }} size='small'>
            <Select
              label='초'
              sx={{ height: '36px' }}
              value={select}
              onChange={(event) => {
                setSelect(event.target.value);
              }}
            >
              <MenuItem value={'s'}>초</MenuItem>
              <MenuItem value={'m'}>분</MenuItem>
              <MenuItem value={'h'}>시간</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={() => {
              handlePlusTime();
            }}
            variant={'outlined'}
            sx={{ marginRight: '3px' }}
          >
            +
          </Button>
          <Button
            onClick={() => {
              handleMinusTime();
            }}
            variant={'outlined'}
            disabled={time < 1}
            sx={{ marginRight: '3px' }}
          >
            -
          </Button>
        </Box>
        <ButtonGroup sx={{ marginTop: '10px' }}>
          <Button
            onClick={() => {
              setFlag(true);
              setEndTime(new Date().getTime() + time * 1000);
            }}
            variant={'contained'}
            disabled={time < 1 || flag}
            sx={{ marginRight: '5px' }}
          >
            시작
          </Button>
          <Button
            onClick={() => {
              setFlag(false);
            }}
            variant={'contained'}
            disabled={!flag}
          >
            중단
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
}

export default PageTimer;
