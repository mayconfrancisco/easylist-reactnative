import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const WrapContent = styled.View`
  flex: 1;
  padding-bottom: ${metrics.basePadding}px;
`;

export const TodoLists = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Space = styled.View`
  margin-left: ${metrics.basePadding}px;
`;
