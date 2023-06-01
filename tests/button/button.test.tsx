import 'jsdom-global/register';
import Button from '@components/button/button';
import { shallow, ShallowWrapper } from 'enzyme';


const testOnClick = () => { /* Dummy function */ };

describe('when button component renders', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Button
        labelText={ 'Test'}
        onClick={ testOnClick }
        type={ 'grass' } />
    );
  });


  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be possible to open menu with Spacebar', () => {
    //
  });
});

