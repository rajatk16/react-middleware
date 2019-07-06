import React from 'react'
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

Enzyme.configure({
  adapter: new Adapter()
});

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox/>
    </Root>
  );
});

it('has a textarea and two buttons', () => {
  expect(wrapped.find('button').length).toEqual(2);
  expect(wrapped.find('textarea').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: {
        value: 'new comment'
      }
    });
    wrapped.update();
  });
  it('has a textarea that users can type into', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  });
  
  it('has a textarea that empties when input is submitted', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});

afterEach(() => {
  wrapped.unmount();
})