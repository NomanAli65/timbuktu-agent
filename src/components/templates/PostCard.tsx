import useTheme from '../../hooks/useTheme';
import {ShadowContainer, View} from '../atoms';
import {PostCardContent, PostCardActions} from '../molecules';
import PostCardComment from '../molecules/PostCardCommentBox';
import {PostCardHeader} from '../organisms';

export default function PostCard() {
  const theme = useTheme();
  return (
    <ShadowContainer rounded style={{width: '95%'}} p="lg">
      <PostCardHeader />
      <PostCardContent />
      <PostCardActions />
      <PostCardComment />
    </ShadowContainer>
  );
}
