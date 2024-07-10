import {SafeAreaContainer, ScreenContainer} from '../../atoms';

import {AddCardTemplate} from '../../templates';

export default function AddCard() {
  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <AddCardTemplate />
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
