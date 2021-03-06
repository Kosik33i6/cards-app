import {connect} from 'react-redux';
import App from './Home';
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
