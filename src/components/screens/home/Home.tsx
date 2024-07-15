import IMAGES from '../../../constants/images';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {BottomTabBarPadding, ScreenContainer} from '../../atoms';
import PostsListsTemplate from '../../templates/PostsList';
import {TPost} from '../../types';
import {changeFilter} from '../../../redux/slices/searchFilter/searchFilterSlice';
import {useFocusEffect} from '@react-navigation/native';

const posts: TPost[] = [
  {
    id: 1,
    time: '2 hours ago',
    name: 'Salon Lift',
    description:
      'Lorem Ipsum is simply dummy text of the printing and industry',
    tags: ['#Services', '#Office'],
    imageUrl: IMAGES.House1,
  },
  {
    id: 2,
    time: '2 hours ago',
    name: 'Salon Lift',
    description:
      'Lorem Ipsum is simply dummy text of the printing and industry',
    tags: ['#Services', '#Office'],
    imageUrl: IMAGES.House2,
  },
  {
    id: 3,
    time: '2 hours ago',
    name: 'Salon Lift',

    description:
      'Lorem Ipsum is simply dummy text of the printing and industry',
    tags: ['#Services', '#Office'],
    imageUrl: IMAGES.House3,
  },
  {
    id: 4,
    time: '2 hours ago',
    name: 'Salon Lift',

    description:
      'Lorem Ipsum is simply dummy text of the printing and industry',
    tags: ['#Services', '#Office'],
    imageUrl: IMAGES.House4,
  },
];

export default function Home() {
  const dispatch = useAppDispatch();

  useFocusEffect(() => {
    dispatch(changeFilter('property'));
  });
  return (
    <ScreenContainer backgroundColor="white">
      <PostsListsTemplate posts={posts} />
      <BottomTabBarPadding />
    </ScreenContainer>
  );
}
