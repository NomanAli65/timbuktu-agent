import { KeyboardAvoidingContainer, SafeAreaContainer, ScreenContainer } from '../../atoms';
import { EditProfileTemplate } from '../../templates';

export default function EditProfile() {
  return (
    <KeyboardAvoidingContainer>
      <ScreenContainer backgroundColor="white">
        <EditProfileTemplate />
      </ScreenContainer>
    </KeyboardAvoidingContainer>
  );
}
