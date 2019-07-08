import styled from 'styled-components/native';
import { colors } from '~/styles';

export default styled.ActivityIndicator.attrs(props => ({
  size: props.size || 'small',
  color: props.color || colors.white,
}))`
  flex: 1;
  align-self: center;
`;
