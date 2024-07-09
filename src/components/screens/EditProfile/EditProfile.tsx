import {SafeAreaContainer, ScreenContainer} from '../../atoms';
import {EditProfileTemplate} from '../../templates';

export default function EditProfile() {
  return (
    <ScreenContainer backgroundColor="white">
      {/* <SafeAreaContainer> */}
      <EditProfileTemplate />
      {/* </SafeAreaContainer> */}
    </ScreenContainer>
  );
}
