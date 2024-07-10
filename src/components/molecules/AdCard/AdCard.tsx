import {ShadowContainer} from '../../atoms';
import {IAdDetails} from '../../types';
import AdCardContent from './AdCardContent';
import AdCardHeader from './AdCardHeader';
import AdStats from './AdStats';

interface IProps {
  item: IAdDetails;
  preview?: boolean;
}

export default function AdCard({item, preview = false}: IProps) {
  return (
    <ShadowContainer rounded p="lg" mv="md">
      <AdCardHeader
        name={item.title}
        image={item.userImg}
        running={item.isRunning}
        preview={preview}
      />
      <AdCardContent
        image={item.image}
        description={item.description}
        tags={['#workfromhome']}
      />

      {!preview && <AdStats />}
    </ShadowContainer>
  );
}
