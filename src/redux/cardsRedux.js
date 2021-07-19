import shortid from 'shortid';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => {
  // console.log('cardColumnID: ', card.columnId);
  // console.log('columnId: ', columnId);
  return card.columnId == columnId;
});

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}
