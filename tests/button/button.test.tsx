import renderer from 'react-test-renderer';
import Button from '@components/button/button';

describe('when button component renders', () => {
  it('should match snapshot', () => {
    const component = renderer.create(
      <Button
        labelText={ 'Test'}
        onClick={ onclick }
        type={ 'grass' } />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

