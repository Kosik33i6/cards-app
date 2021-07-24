import {connect} from 'react-redux';
import ListItem from './ListItem';
import {getColumnsForList} from '../../redux/columnsRedux';

const mapStateToProps = (state, props) => {
  // console.log(state);
  // console.log(props);
  return {
    columns:getColumnsForList(state, props.id),
  };
};

export default connect(mapStateToProps)(ListItem);
