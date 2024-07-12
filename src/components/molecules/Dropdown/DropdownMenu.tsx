import React from 'react';
import {Icon, Text, View} from '../../atoms';
import useTheme from '../../../hooks/useTheme';
import {TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {moderateScale} from '../../../helpers/metrics';

interface IProps {
  items: string[];
  handleSelect: (option: string) => any;
  open: boolean;
  close: () => void;
}

export default function DropdownMenu({
  items,
  handleSelect,
  open,
  close,
}: IProps) {
  const theme = useTheme();
  return (
    <Modal
      isVisible={open}
      onBackdropPress={() => {
        close();
      }}>
      <View justifyContent="center" alignItems="center">
        <View
          backgroundColor="white"
          style={{
            width: '90%',
          }}
          rounded
          p="md">
          {items.map((option, idx) => (
            <TouchableOpacity
              onPress={() => handleSelect(option)}
              key={option}
              style={{
                padding: theme.spacing.md,
                borderBottomWidth: items.length - 1 === idx ? 0 : 1,
                borderColor: theme.colors.gray7,
              }}>
              <View flexDirection="row" alignItems="center">
                <Text color="gray4" size="sm" variant="semibold">
                  {option}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
}
