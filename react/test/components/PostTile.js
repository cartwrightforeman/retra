import PostTile from '../../src/components/PostTile';

describe('PostTile', () => {
  let body,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <PostTile
        body="random post"
      />
    );
  });

  // it('should render an i tag', () => {
  //   expect(wrapper.find('i')).toBePresent();
  // });
  //
  // it('should render a p tag with text "random post"', () => {
  //   expect(wrapper.find('p').text()).toBe('random post');
  // });
});
