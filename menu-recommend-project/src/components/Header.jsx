import React from 'react';
import styled from 'styled-components';
// 함수형 컴포넌트 -> function 선언문 / const 표현식
// imsc
// vscode-styled-components -> 

// reset.css -> 브라우저에 기본적으로 들어가있는 스타일링을 초기화 -> 왼쪽이랑 위쪽에 살짝 뜨는거 없어지게
const Header = () => {
    return (
        <HeaderContainer>
            🥰오늘의 점메추🥰
        </HeaderContainer>
    );
};


export default Header;

const HeaderContainer = styled.header`
    background-color: pink;
    text-align: center;
    font-size: 30px;
    padding : 20px;
    font-weight: 600;
`