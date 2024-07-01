import {ShadowContainer} from '../atoms';
import {
  PostCardContent,
  PostCardActions,
  PostCardHeader,
  PostCardComment,
} from '../molecules';
import {TPost} from '../types';

interface IProps {
  item: TPost;
}

export default function PostCard({item}: IProps) {
  const {name, time, description, tags, imageUrl} = item;
  return (
    <ShadowContainer rounded p="lg" mv="md">
      <PostCardHeader />
      <PostCardContent image={imageUrl} description={description} tags={tags} />
      <PostCardActions />
      <PostCardComment />
    </ShadowContainer>
  );
}
