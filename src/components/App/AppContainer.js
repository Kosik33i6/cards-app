import {connect} from 'react-redux';
import App from './App';
import {createActionAddList} from '../../redux/listsRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

const mapDispatchToProps = dispatch => ({
  addList: (title, description, image) => dispatch(createActionAddList({
    title,
    description,
    image,
  })),
});

// const mapDispatchToProps = (dispatch) => {
//   console.log('mapDispatchToProps - dispatch: ', dispatch);
//   // console.log('mapDispatchToProps - props', props);
//   return {
//     addList: (title, description, image) => {
//       // console.log('value: ', value);
//       return dispatch(createActionAddList({
//         title,
//         description,
//         image}));
//     },
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
