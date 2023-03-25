import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUSD, selectEUR, selectGBP, selectPLN } from 'redux/selectors';
import {
  FormWrap,
  InputsWrap,
  StuledInput,
  StuledSelect,
} from './ConvertForm.styled';

export const ConvertForm = () => {
  const USD = useSelector(selectUSD);
  const EUR = useSelector(selectEUR);
  const GPB = useSelector(selectGBP);
  const PLN = useSelector(selectPLN);

  const rates = {
    UAH: 1,
    USD: USD[0].rate,
    EUR: EUR[0].rate,
    GPB: GPB[0].rate,
    PLN: PLN[0].rate,
  };

  const [firstSelect, setFirstSelect] = useState('USD');
  const [secondSelect, setSecondSelect] = useState('UAH');
  const [firstInput, setFirstInput] = useState('100');
  const [secondInput, setSecondInput] = useState(rates.USD);

  const calculateCurrency = (rate1, rate2, value) => {
    // const locale = navigator.language;
    // return value
    //   ? new Intl.NumberFormat(locale).format((value * rate1) / rate2)
    //   : '';
    return value ? ((value * rate1) / rate2).toFixed(4) : '';
  };

  const handleFirstInputChange = e => {
    setFirstInput(e.target.value);
    const convertedValue = calculateCurrency(
      rates[firstSelect],
      rates[secondSelect],
      e.target.value
    );
    setSecondInput(convertedValue);
  };

  const handleSecondInputChange = e => {
    setSecondInput(e.target.value);
    const convertedValue = calculateCurrency(
      rates[secondSelect],
      rates[firstSelect],
      e.target.value
    );
    setFirstInput(convertedValue);
  };

  const handleFirstSelectChange = e => {
    setFirstSelect(e.target.value);
    const convertedValue = calculateCurrency(
      rates[secondSelect],
      rates[e.target.value],
      secondInput
    );
    setFirstInput(convertedValue);
  };

  const handleSecondSelectChange = e => {
    setSecondSelect(e.target.value);
    const convertedValue = calculateCurrency(
      rates[firstSelect],
      rates[e.target.value],
      firstInput
    );
    setSecondInput(convertedValue);
  };

  return (
    <FormWrap>
      <InputsWrap>
        <StuledSelect value={firstSelect} onChange={handleFirstSelectChange}>
          <option value={'USD'}>{USD[0].txt}</option>
          <option value={'EUR'}>{EUR[0].txt}</option>
          <option value={'GPB'}>{GPB[0].txt}</option>
          <option value={'PLN'}>{PLN[0].txt}</option>
          <option value={'UAH'}>Українська гривня</option>
        </StuledSelect>
        <StuledInput
          min="0"
          type="number"
          value={firstInput}
          onChange={handleFirstInputChange}
        />
      </InputsWrap>
      <InputsWrap>
        <StuledSelect value={secondSelect} onChange={handleSecondSelectChange}>
          <option value={'USD'}>{USD[0].txt}</option>
          <option value={'EUR'}>{EUR[0].txt}</option>
          <option value={'GPB'}>{GPB[0].txt}</option>
          <option value={'PLN'}>{PLN[0].txt}</option>
          <option value={'UAH'}>Українська гривня</option>
        </StuledSelect>
        <StuledInput
          min="0"
          type="number"
          value={secondInput}
          onChange={handleSecondInputChange}
        />
      </InputsWrap>
    </FormWrap>
  );
};
