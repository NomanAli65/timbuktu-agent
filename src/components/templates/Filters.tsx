import React from 'react';
import {IFilter} from '../types';
import {ScrollView} from 'react-native';
import {FiltersList} from '../organisms';
import useTheme from '../../hooks/useTheme';

interface IProps {
  filters: IFilter[];
}

export default function Filters({filters}: IProps) {
  const theme = useTheme();
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 10,
        marginTop: theme.spacing.md,
        flexGrow: 1,
      }}>
      <FiltersList filters={filters} />
    </ScrollView>
  );
}
