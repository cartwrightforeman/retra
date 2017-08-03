import React from 'react';
import TextField from '../../src/components/TextField'

describe('TextField', () => {
  let label,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TextField
        value="awesome"
        label="label"
      />
    );
  });

  it('should render a TextField tag', () => {
    expect(wrapper.find('TextField'))
  });

  it('should render the label for user to see', () => {
    expect(wrapper.find("label")).toIncludeText("label");
  })
});
