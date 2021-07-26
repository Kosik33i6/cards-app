import {connect} from 'react-redux';
import Navigation from './Navigation';

const mapStateToProps = state => {
  const lists = [];
  for(let {id, title} of state.lists) {
    lists.push({id, title});
  }
  return {
    lists,
  };
};

export default connect(mapStateToProps)(Navigation);
