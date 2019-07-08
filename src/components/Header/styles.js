import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  height: ${metrics.defaultHeaderHeight}px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  margin-top: ${metrics.statusBarMargin}px;
`;
