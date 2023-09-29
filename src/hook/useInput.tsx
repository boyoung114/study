import React, { useState } from 'react';
import { Button, Input } from '@mui/material';

export const useInput = () => {
  const [value, setValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onChangeNotEmpty = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.trim());
  };

  return { value, onChange, onChangeNotEmpty };
};
