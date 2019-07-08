import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  background-color: ${colors.white};
  margin-right: ${metrics.basePadding}px;
  border-radius: ${metrics.baseRadius}px;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  color: ${colors.darker};
  border-width: 1px;
  border-color: ${colors.light};
  padding: ${metrics.basePadding / 2}px;
  margin-bottom: ${metrics.basePadding}px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Cancel = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 10, right: 10, bottom: 10, left: 10,
  },
})`
  justify-content: center;
  align-items: center;
  margin: ${metrics.baseMargin}px;
`;

export const Add = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 10, right: 10, bottom: 10, left: 10,
  },
})`
  justify-content: center;
  align-items: center;
  margin: ${metrics.baseMargin}px;
`;

export const BtTextOK = styled.Text`
  color: ${colors.primary};
  font-size: 16px;
`;

export const BtTextCancel = styled.Text`
  color: ${colors.regular};
  font-size: 16px;
`;

export const AddItem = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 8,
    right: 8,
    bottom: 8,
    left: 8,
  },
})`
  justify-content: center;
  align-items: center;
  margin-top: ${metrics.baseMargin}px;
`;

export const AddItemText = styled.Text`
  color: ${colors.dark};
  font-size: 16px;
  font-weight: bold;
`;
