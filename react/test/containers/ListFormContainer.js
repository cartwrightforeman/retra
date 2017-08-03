import ListFormContainer from '../../src/containers/ListFormContainer';
import BodyField from '../../src/components/BodyField'

describe('ListFormContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <ListFormContainer />
    );
  });

  it('should have state error', () => {
    expect(wrapper).toHaveState('error');
  });

  it('should have state body', () => {
    expect(wrapper).toHaveState('body');
  });

  it('should render a h8 tag', () => {
    expect(wrapper.find('h8').text()).toBe ("Add Post:");
  });

  it('should render a BodyField tag', () => {
    expect(wrapper.find(BodyField)).toBePresent();
  });
});
