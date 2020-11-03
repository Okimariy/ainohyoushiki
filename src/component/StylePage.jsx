import styled from 'styled-components';


//青・・・#1852a3
//ピンク・・・#e55f50
export const HeaderTitle = styled.a`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
`;
export const HeaderLink = styled.a`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  background-color: #e55f50;
  padding: 0.6rem 2rem;
  border-radius: 30px;
`;
export const VerificationLink = styled.button`
  width:100%;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  background-color: #e55f50;
  padding: 0.6rem 2rem;
  border-radius: 30px;
  border: solid 1px #fff;
`;

// TOPのコンテンツ
export const Homecontent = styled.div`
  width:100%;
  background-color: #e55f50;
  margin:0 auto;
  height:100vh;
`;
// TOPタイトル
export const Toptitle = styled.h1`
  font-size:4.8rem;
  font-weight:500;
  text-align: center;
  color: #fff;
  margin:0 auto;
  padding: 8rem 10rem 5rem 9rem;
`;
// TOPSTARTbutton
export const TopStartBtn = styled.div`
  width:100%;
  margin: 0 auto;
  text-align: center;
`;
// スライダーのWrapar
export const SliderWrapar = styled.div`
  width:100%;
  padding: 8rem 0rem;
`;
// Sliderのボタン部分のcss
export const SliderWraparBtnBox = styled.div`
  width:100%;
  padding: 0rem 0.4rem;
`;
export const SliderWraparBtnBox__item = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
}
`;
export const SliderWraparBtnBox__item__list = styled.li`
  width:50%;
}
`;