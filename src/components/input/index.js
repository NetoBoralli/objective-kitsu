import React, { useState } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { useAsync } from 'react-async-hook';

import './style.scss';
import useConstant from 'use-constant';

function Input({ handleLoad }) {
  const useSearchCharacter = () => {
    const [inputText, setInputText] = useState('');

    const debouncedSearchCharacter = useConstant(() =>
      AwesomeDebouncePromise(handleLoad, 400)
    );

    useAsync(
      async () => {
        return debouncedSearchCharacter(inputText);
      },
      [inputText]
    );

    return {
      inputText,
      setInputText
    };
  };
  const { inputText, setInputText } = useSearchCharacter();
  const [label] = useState('Nome do Personagem');

  return (
    <div className="input-box">
      <span className="text">{label}</span> <br />
      <input value={inputText} onChange={e => setInputText(e.target.value)} type="text" />
    </div>
  );
}

export default Input;