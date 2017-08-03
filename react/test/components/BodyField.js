import React from 'react';
import BodyField from '../../src/components/BodyField'

describe('BodyField', () => {
  let label,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <BodyField
        value="awesome"
        label="label"
      />
    );
  });

  it('should render a BodyField tag', () => {
    expect(wrapper.find('BodyField'))
  });

  it('should render the label for user to see', () => {
    expect(wrapper.find("label")).toIncludeText("label");
  })
});
