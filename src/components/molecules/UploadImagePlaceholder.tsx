import React from 'react';
import {Icon, Text, View} from '../atoms';
import {moderateScale} from '../../helpers/metrics';
import useTheme from '../../hooks/useTheme';

interface IProps {
  showBtn?: boolean;
}

export default function UploadImagePlaceholder({showBtn = true}: IProps) {
  const theme = useTheme();
  return (
    <View alignItems="center">
      <View
        backgroundColor="gray7"
        justifyContent="center"
        alignItems="center"
        p="lg"
        style={{
          height: 150,
          width: '90%',
        }}
        rounded>
        <Icon
          name="image"
          vector="Ionicons"
          size={moderateScale(30)}
          color={theme.colors.gray}
        />
        <Text color="gray" size="sm" variant="semibold">
          Add Images
        </Text>
      </View>

      {showBtn && (
        <View
          flexDirection="row"
          alignItems="center"
          gap={4}
          justifyContent="center"
          mt="md">
          <Icon
            name="images"
            color={theme.colors.primary}
            size={moderateScale(20)}
          />
          <Text color="primary" size="sm" variant="semibold">
            Add more
          </Text>
        </View>
      )}
    </View>
  );
}
