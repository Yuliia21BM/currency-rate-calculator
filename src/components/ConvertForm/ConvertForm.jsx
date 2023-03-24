import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectUSD,
  selectEUR,
  selectGBP,
  selectPLN,
  selectAllCurrency,
} from 'redux/selectors';
import { FormWrap, InputsWrap } from './ConvertForm.styled';

export const ConvertForm = () => {
  const [firstInput, setFirstInput] = useState('1');
  const [firstSelect, setFirstSelect] = useState('USD');
  const [secondInput, setSecondInput] = useState('');
  const [secondSelect, setSecondSelect] = useState('UAH');
  const USD = useSelector(selectUSD);
  const EUR = useSelector(selectEUR);
  const GPB = useSelector(selectGBP);
  const PLN = useSelector(selectPLN);

  const all = useSelector(selectAllCurrency);
  console.log(all);

  const calculateCurrency = (rate1, rate2, amount) => {
    const uahAmount = amount * rate1;
    const convertedAmount = (uahAmount / (rate2 * amount)) * amount;
    return convertedAmount.toFixed(4);
  };

  const rates = {
    UAH: 1,
    USD: USD[0].rate,
    EUR: EUR[0].rate,
    GPB: GPB[0].rate,
    PLN: PLN[0].rate,
  };

  //   useEffect(() => {
  //     if (firstInput === '') {
  //       setSecondInput('');
  //       return;
  //     }

  //     const convertedValue = calculateCurrency(
  //       rates[firstSelect],
  //       rates[secondSelect],
  //       Number(firstInput)
  //     );
  //     setSecondInput(String(convertedValue));
  //   }, [firstInput, firstSelect, secondInput, secondSelect, USD, EUR, GPB, PLN]);

  //   useEffect(() => {
  //   if (secondInput === '') {
  //   setFirstInput('');
  //   return;
  // }
  //     const rates = {
  //       UAH: 1,
  //       USD: USD[0].rate,
  //       EUR: EUR[0].rate,
  //       GPB: GPB[0].rate,
  //       PLN: PLN[0].rate,
  //     };
  //     const convertedValue = calculateCurrency(
  //       rates[secondSelect],
  //       rates[firstSelect],
  //       Number(secondInput)
  //     );
  //     setFirstInput(String(convertedValue));
  //   }, [firstInput, firstSelect, secondInput, secondSelect, USD, EUR, GPB, PLN]);

  return (
    <FormWrap>
      <InputsWrap>
        <select
          value={firstSelect}
          onChange={e => setFirstSelect(e.target.value)}
        >
          <option value={'USD'}>{USD[0].txt}</option>
          <option value={'EUR'}>{EUR[0].txt}</option>
          <option value={'GPB'}>{GPB[0].txt}</option>
          <option value={'PLN'}>{PLN[0].txt}</option>
          <option value={'UAH'}>Гривня</option>
        </select>
        <input
          type="number"
          value={firstInput}
          onChange={e => {
            setFirstInput(e.target.value);
            if (firstInput === '') {
              setSecondInput('');
              //   return;
            }
            const convertedValue = calculateCurrency(
              rates[firstSelect],
              rates[secondSelect],
              Number(firstInput)
            );
            setSecondInput(String(convertedValue));
          }}
        ></input>
      </InputsWrap>
      <InputsWrap>
        <select
          value={secondSelect}
          onChange={e => setSecondSelect(e.target.value)}
        >
          <option value={'USD'}>{USD[0].txt}</option>
          <option value={'EUR'}>{EUR[0].txt}</option>
          <option value={'GPB'}>{GPB[0].txt}</option>
          <option value={'PLN'}>{PLN[0].txt}</option>
          <option value={'UAH'}>Гривня</option>
        </select>
        <input
          type="number"
          value={secondInput}
          onChange={e => {
            setSecondInput(e.target.value);
            if (secondInput === '') {
              setFirstInput('');
              //   return;
            }
            const convertedValue = calculateCurrency(
              rates[secondSelect],
              rates[firstSelect],
              Number(secondInput)
            );
            setFirstInput(String(convertedValue));
          }}
        ></input>
      </InputsWrap>
    </FormWrap>
  );
};
