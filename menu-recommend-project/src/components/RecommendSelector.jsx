//RecommendSelector -> 컴포넌트 이름은 파스칼 케이스

import React from "react";
import styled from "styled-components";

// 최상위가 하나 있어야 한다.
const RecommendSelector = () => {
  return (
      <RecommendSelectorContainer>
        <SelectorHead>원하는 추천 방식을 골라줘!</SelectorHead>
        <ButtonContainer>
            <SelectorMenu>취향대로 추천</SelectorMenu>
            <SelectorMenu>랜덤 추천</SelectorMenu>
        </ButtonContainer>
      </RecommendSelectorContainer>
  );
};

export default RecommendSelector;

const RecommendSelectorContainer = styled.section`
  background-color: pink;
  margin: 20px 150px;
  width: auto;
  text-align: center;
  font-size: 30px;
  padding: 20px;
  font-weight: 600;
`;

const SelectorHead = styled.header`
  background-color: #cee3f6;
  margin: 20px 200px;
  width: auto;
  text-align: center;
  font-size: 30px;
  padding: 20px;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content : center;    
`

const SelectorMenu = styled.button`
  background-color: #1b6db8;
  margin: 20px 0px;
  width: 400px;
  height: 400px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  border-radius: 10px;
  border-color: #084a88;
  cursor: pointer;
  
  &:hover {
    background-color: #970868;
  }
  
`;
