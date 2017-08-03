import ListFormContainer from '../../src/containers/ListFormContainer';
import TextField from '../../src/components/TextField'

describe('ListFormContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <ListFormContainer />
    );
  });

  it('should have state body', () => {
    expect(wrapper).toHaveState('body');
  });

  it('should render a h8 tag', () => {
    expect(wrapper.find('h8').text()).toBe ("Add Post:");
  });

  it('should render a TextField tag', () => {
    expect(wrapper.find(TextField)).toBePresent();
  });
});
