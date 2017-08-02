import BoardShowContainer from '../../src/containers/BoardShowContainer';
import ListShowContainer from '../../src/containers/ListShowContainer';

describe('BoardShowContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <BoardShowContainer
      />
    );
  });

  it('should have state lists', () => {
    expect(wrapper).toHaveState('lists');
  });

  it('should render a ListShowContainer', () => {
    expect(wrapper.find(ListShowContainer)).toBePresent();
  });
});
