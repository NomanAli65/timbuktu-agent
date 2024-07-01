import {useEffect, useRef} from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

interface IProps {
  isVisible?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export default function CustomBottomSheet({
  isVisible = false,
  onClose,
  children,
}: IProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  useEffect(() => {
    if (isVisible) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isVisible]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={['100%']}
      style={{flex: 1}}
      onClose={onClose}>
      <BottomSheetView
        style={{
          flex: 1,
        }}>
        {children}
      </BottomSheetView>
    </BottomSheet>
  );
}
