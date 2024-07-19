import React from 'react';
import {IFilter} from '../types';
import {ScrollView} from 'react-native';
import {FiltersList} from '../organisms';
import useTheme from '../../hooks/useTheme';
import {Button, View} from '../atoms';

interface IProps {
  filters: IFilter[];
}

export default function Filters({filters}: IProps) {
  const theme = useTheme();
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 10,
        flexGrow: 1,
        paddingHorizontal: theme.spacing.xs,
      }}>
      <FiltersList filters={filters} />
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="space-evenly">
        <Button
          label="Reset"
          backgroundColor="gray"
          textColor="gray4"
          style={{
            width: '45%',
          }}
        />
        <Button
          label="Apply"
          style={{
            width: '45%',
          }}
        />
      </View>
    </ScrollView>
  );
}
