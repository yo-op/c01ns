import styled from 'styled-components/native';

const CoinFullName = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: white;
  margin-bottom: 2px;
`;

const CoinShortName = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: rgba(255,255,255, 0.5);
`;

const CoinNameWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

export {
  CoinFullName,
  CoinShortName,
  CoinNameWrapper,
};
