import {SafeAreaContainer, ScreenContainer, View} from '../../atoms';
import {ChangePasswordProfileTemplate} from '../../templates';

export default function ChangePasswordProfile() {
  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <ChangePasswordProfileTemplate />
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
