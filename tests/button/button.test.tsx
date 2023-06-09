import 'jsdom-global/register';
import { Button } from '@components/button/button.component';
import { shallow, ShallowWrapper } from 'enzyme';

describe('when button component renders', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Button
        labelText={'Test'}
        onClick={jest.fn()}
        type={'grass'} />
    );
  });


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
