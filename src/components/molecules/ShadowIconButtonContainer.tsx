import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {ShadowContainer} from '../atoms';

export default function ShadowIconButtonContainer({
  children,
  ...rest
}: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={{height: 150, width: '45%'}} {...rest}>
      <ShadowContainer
        p="md"
        alignItems="center"
        justifyContent="center"
        rounded
        style={{height: '100%', width: '100%'}}
        gap={8}>
        {children}
      </ShadowContainer>
    </TouchableOpacity>
  );
}
