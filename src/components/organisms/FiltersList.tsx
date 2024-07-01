import {IFilter} from '../types';
import {FilterContainer} from '../molecules';

interface IProps {
  filters: IFilter[];
}

export default function FiltersList({filters}: IProps) {
  return filters.map(filter => (
    <FilterContainer item={filter} key={filter.title} />
  ));
}
