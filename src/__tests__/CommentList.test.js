import React from 'react'
import Enzyme, { mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

Enzyme.configure({
  adapter: new Adapter()
});

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one li element per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain("Comments ListComment #1");
  expect(wrapped.render().text()).toContain("Comment #2");
});