import styled from 'styled-components';

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding-top: 50px;
  @media screen and (min-width: 768px) {
    gap: 30px;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    gap: 50px;
  }
`;

export const InputsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  @media screen and (min-width: 768px) {
    gap: 10px;
  }
  @media screen and (min-width: 1280px) {
    gap: 15px;
  }
`;

export const StuledInput = styled.input`
  width: 150px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-color: #f5f5f5;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  &:hover,
  &:focus,
  &:active {
    border-color: #315842;
  }

  &::-webkit-inner-spin-button {
    padding: 5px;
    right: 5px;
  }

  &::-webkit-outer-spin-button {
    padding: 5px;
    left: 5px;
  }

  @media screen and (min-width: 480px) {
    width: 170px;
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    width: 250px;
    font-size: 18px;
  }
`;

export const StuledSelect = styled.select`
  width: 130px;
  background-color: #315842;
  padding: 10px;
  border: 2px solid #ccc;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  text-align: center;
  &:hover,
  &:focus {
    border-color: #fff;
  }
  @media screen and (min-width: 480px) {
    width: 150px;
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    width: 200px;
    font-size: 18px;
  }
`;
