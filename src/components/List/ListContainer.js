import {connect} from 'react-redux';
import List from './List';

export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

// const mapStateToProps = (state, props) => ({
//   columns: state.columns,
// });

const mapStateToProps = (state, props) => {
  console.log('state: ', state);
  console.log('props: ', props);
  return {
    columns: getColumnsForList(state, props.id),
  };
};

export default connect(mapStateToProps)(List);
