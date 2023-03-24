import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUSD, selectEUR, selectGBP } from 'redux/selectors';
import { FormWrap, InputsWrap } from './ConvertForm.styled';

export const ConvertForm = () => {
  const [firstInput, setFirstInput] = useState('1');
  const [firstSelect, setFirstSelect] = useState('USD');
  const [secondInput, setSecondInput] = useState('');
  const [secondSelect, setSecondSelect] = useState('UAH');
  const USD = useSelector(selectUSD);
  const EUR = useSelector(selectEUR);
  const GPB = useSelector(selectGBP);

  const calculateCurrency = (rate1, rate2, amount) => {
    console.log(rate1, rate2, amount);
    const uahAmount = amount * rate1;
    const convertedAmount = (uahAmount / (rate2 * amount)) * amount;
    return convertedAmount;
  };
  useEffect(() => {
    if (firstInput === '') return;
    const rates = {
      UAH: 1,
      USD: USD[0].rate,
      EUR: EUR[0].rate,
      GPB: GPB[0].rate,
    };
    console.log(rates);
    const convertedValue = calculateCurrency(
      rates[firstSelect],
      rates[secondSelect],
      Number(firstInput)
    );
    console.log(convertedValue);
    setSecondInput(String(convertedValue));
  }, [firstInput, firstSelect, secondInput, secondSelect, USD, EUR, GPB]);

  return (
    <FormWrap>
      <InputsWrap>
        <select
          value={firstSelect}
          onChange={e => setFirstSelect(e.target.value)}
        >
          <option value={'USD'}>USD</option>
          <option value={'EUR'}>EUR</option>
          <option value={'GPB'}>GPB</option>
          <option value={'UAH'}>UAH</option>
        </select>
        <input
          type="number"
          value={firstInput}
          onChange={e => setFirstInput(e.target.value)}
        ></input>
      </InputsWrap>
      <InputsWrap>
        <select
          value={secondSelect}
          onChange={e => setSecondSelect(e.target.value)}
        >
          <option value={'USD'}>USD</option>
          <option value={'EUR'}>EUR</option>
          <option value={'GPB'}>GPB</option>
          <option value={'UAH'}>UAH</option>
        </select>
        <input
          type="number"
          value={secondInput}
          onChange={e => setSecondInput(e.target.value)}
        ></input>
      </InputsWrap>
    </FormWrap>
  );
};
