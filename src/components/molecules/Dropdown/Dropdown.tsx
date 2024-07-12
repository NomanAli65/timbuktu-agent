import React, {useState} from 'react';
import DropdownInput from './DropdownInput';
import {View} from '../../atoms';
import {DimensionValue} from 'react-native';
import DropdownMenu from './DropdownMenu';

interface IProps {
  label: string;
  options: string[];
  selectedValue?: string;
  onSelect: (option: string) => any;
  width?: DimensionValue | undefined;
}

export default function Dropdown({
  label,
  options,
  selectedValue,
  onSelect,
  width,
}: IProps) {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleSelectOption = (option: string) => {
    onSelect(option);
    setOpen(false);
  };
  return (
    <View
      style={{
        position: 'relative',
        width,
      }}>
      <DropdownInput
        label={label}
        selectedValue={selectedValue}
        toggleDropdown={toggleDropdown}
      />
      {open && (
        <DropdownMenu
          items={options}
          handleSelect={handleSelectOption}
          open={open}
          close={toggleDropdown}
        />
      )}
    </View>
  );
}
