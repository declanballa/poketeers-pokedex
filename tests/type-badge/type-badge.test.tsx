import 'jsdom-global/register';
import { shallow, ShallowWrapper } from 'enzyme';
import { TypeBadge } from '@components/type-badge/type-badge.component';

describe('when TypeButton component renders', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TypeBadge types={['grass', 'poison']} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

