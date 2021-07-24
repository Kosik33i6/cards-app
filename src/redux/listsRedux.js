import shortid from 'shortid';

const reducerName = 'lists';
const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_LIST = createActionName('ADD_LIST');

export const createActionAddList = ({...payload}) => {
  console.log('payload: ', payload);
  return {
    payload: {...payload, id: shortid.generate()},
    type: ADD_LIST,
  };
};

// reducer
export default function reducer(statePart = [], action = {}) {
  // console.log('statePart ListRedux: ', statePart);
  // console.log('action ListRedux: ', action);
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}
