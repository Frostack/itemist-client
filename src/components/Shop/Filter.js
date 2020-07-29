import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const Wrapper = styled.div`
  background-color: #dddddd;
  position: fixed;
  color: #333333;
  right: 0;
  height: 50vh;
  bottom: 0;
  width: 30vw;
  overflow: hidden;
  padding: 0 16px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09),
    0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09), 0 32px 16px rgba(0, 0, 0, 0.09);
  transform: translateY(-50%) translateX(90%);
  border-radius: 32px 0 0 32px;
  transition: 0.7s;
  :hover {
    transform: translateY(-50%) translateX(0%);
  }
`;

function Filter() {
  return (
    <Wrapper>
      <p>فیلتر ها</p>
      <hr />
      <Checkbox text="اینا" />
      <Checkbox text="اونا" />
      <Checkbox text="شروین" />
      <Checkbox text="یه نوبه" />
    </Wrapper>
  );
}

export default Filter;
