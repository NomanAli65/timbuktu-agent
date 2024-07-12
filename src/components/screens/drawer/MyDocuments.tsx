import React from 'react';
import {
  Icon,
  SafeAreaContainer,
  ScreenContainer,
  ShadowContainer,
  Text,
  View,
} from '../../atoms';
import {Header} from '../../organisms';
import {moderateScale} from '../../../helpers/metrics';
import useTheme from '../../../hooks/useTheme';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../../navigation/types';
import SCREENS from '../../../constants/screens';

function CardContainer({children, ...rest}: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      style={{width: '45%', height: 150, marginVertical: 8}}
      {...rest}>
      <ShadowContainer
        p="md"
        style={{width: '100%', height: '100%'}}
        justifyContent="space-evenly"
        rounded>
        {children}
      </ShadowContainer>
    </TouchableOpacity>
  );
}

export default function MyDocuments() {
  const theme = useTheme();
  const navigation = useNavigation<MainStackNavigation>();
  return (
    <ScreenContainer backgroundColor="white">
      <SafeAreaContainer>
        <Header title="my documents" />

        <View flex={1} p="md">
          <Text variant="medium">DOCUMENTS SUBMITTED</Text>

          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly"
            style={{flexWrap: 'wrap'}}
            mt="md">
            <CardContainer
              onPress={() => navigation.navigate(SCREENS.DOCUMENTS)}>
              <Icon
                name="folder"
                size={moderateScale(40)}
                color={theme.colors.primary}
              />
              <View>
                <Text variant="medium">John</Text>
                <Text size="sm" color="gray2">
                  Lorem Ipsum
                </Text>
              </View>
            </CardContainer>

            <CardContainer>
              <Icon
                name="folder"
                size={moderateScale(40)}
                color={theme.colors.primary}
              />
              <View>
                <Text variant="medium">Daniel</Text>
                <Text size="sm" color="gray2">
                  Lorem Ipsum
                </Text>
              </View>
            </CardContainer>

            <CardContainer>
              <Icon
                name="folder"
                size={moderateScale(40)}
                color={theme.colors.primary}
              />
              <View>
                <Text variant="medium">Smith</Text>
                <Text size="sm" color="gray2">
                  Lorem Ipsum
                </Text>
              </View>
            </CardContainer>

            <CardContainer>
              <Icon
                name="add"
                size={moderateScale(40)}
                color={theme.colors.primary}
              />
              <View>
                <Text variant="semibold">Add Document</Text>
              </View>
            </CardContainer>
          </View>
        </View>
      </SafeAreaContainer>
    </ScreenContainer>
  );
}
