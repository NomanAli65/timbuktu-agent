import {SafeAreaContainer, ScreenContainer} from '../../atoms';
import {MyTimbuktuTemplate} from '../../templates';

export default function MyTimbuktu() {
  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <MyTimbuktuTemplate />
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
