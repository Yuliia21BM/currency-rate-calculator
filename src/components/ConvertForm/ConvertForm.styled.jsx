import styled from 'styled-components';

export const FormWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 50px;
  @media screen and (min-width: 768px) {
    gap: 30px;
  }
  @media screen and (min-width: 1280px) {
    gap: 50px;
  }
`;

export const InputsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media screen and (min-width: 768px) {
    gap: 10px;
  }
  @media screen and (min-width: 1280px) {
    gap: 15px;
  }
`;

export const StuledInput = styled.input`
  width: 70px;
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
    width: 100px;
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
  width: 60px;
  /* overflow-x: scroll; */
  /* scroll-behavior: smooth; */
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
    width: 90px;
  }
  @media screen and (min-width: 768px) {
    width: 150px;
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    width: 200px;
    font-size: 18px;
  }
`;

// export const FormWrap = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 40px;
//   padding-top: 50px;
//   padding-bottom: 100px;
// `;

// export const InputsWrap = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 15px;
// `;

// export const StuledInput = styled.input`
//   width: 100px;
//   outline: none;
//   appearance: none;
//   -webkit-appearance: none;
//   -moz-appearance: none;

//   background-color: #f5f5f5;
//   padding: 15px;
//   border: 2px solid #ccc;
//   border-radius: 4px;
//   font-size: 18px;
//   text-align: center;
//   &:hover,
//   &:focus,
//   &:active {
//     border-color: #315842;
//   }

//   &::-webkit-inner-spin-button {
//     padding: 5px;
//     right: 5px;
//   }

//   &::-webkit-outer-spin-button {
//     padding: 5px;
//     left: 5px;
//   }
// `;

// export const StuledSelect = styled.select`
//   width: 50px;
//   background-color: #315842;
//   padding: 15px;
//   border: 2px solid #ccc;
//   color: #fff;
//   border-radius: 4px;
//   font-size: 18px;
//   text-align: center;
//   &:hover,
//   &:focus {
//     border-color: #fff;
//   }
// `;
