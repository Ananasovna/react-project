import { addPostActionCreator, deletePostActionCreator, profileReducer } from "../profileReducer";


let state = {
  postsData: [
    { id: 1, text: "How are you?", likeCounter: "53" },
    { id: 2, text: "What a good day!", likeCounter: "2" },
    { id: 3, text: "It's my first post", likeCounter: "10" },
  ],

  profile: null,
  status: '',
};

it('length of posts should be incremented', () => {
  let action = addPostActionCreator('test message');

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(4);

});

it('new post should contain right message', () => {
  let action = addPostActionCreator('test message');

  let newState = profileReducer(state, action);

  expect(newState.postsData[3].text).toBe('test message');

});

it('length of posts should be decremented', () => {
  let action = deletePostActionCreator(1);

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(2);

});