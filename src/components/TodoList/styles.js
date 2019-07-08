import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const Container = styled.View`
  height: 100%;
  width: ${metrics.utilScreenWidth - metrics.basePadding * 4}px;
  margin: 0 ${metrics.basePadding}px 0 0;
  padding: ${metrics.basePadding}px;
  border-radius: ${metrics.baseRadius}px;
  background-color: ${colors.white};
`;

export const Title = styled.Text`
  color: ${colors.darker};
  font-size: 22px;
  font-weight: bold;
`;

export const Items = styled.FlatList`
  padding: ${metrics.basePadding}px;
`;

export const Todo = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 8,
    right: 8,
    bottom: 8,
    left: 8,
  },
})`
  margin-bottom: ${metrics.baseMargin * 2}px;
`;

export const TodoText = styled.Text`
  text-decoration-line: ${({ finished }) => (finished ? 'line-through' : 'none')};
  color: ${colors.dark};
  font-size: 16px;
`;
