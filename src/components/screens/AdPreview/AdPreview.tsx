import {SafeAreaContainer, ScreenContainer} from '../../atoms';
import {AdPreviewTemplate} from '../../templates';

export default function AdPreview() {
  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <AdPreviewTemplate />
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
