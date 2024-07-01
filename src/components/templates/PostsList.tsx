import React from 'react';
import {TPost} from '../types';
import {FlatList} from 'react-native';
import {PostCard} from '../organisms';
import {View} from '../atoms';
import useTheme from '../../hooks/useTheme';

interface IProps {
  posts: TPost[];
}

export default function PostsListsTemplate({posts}: IProps) {
  return (
    <View flex={1}>
      <FlatList
        data={posts}
        renderItem={({item}) => <PostCard item={item} />}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
        }}
      />
    </View>
  );
}
