import {connect} from 'react-redux';
import Column from './Column';

const mapStateToProps = state => ({
  cards: state.cards,
});

export default connect(mapStateToProps)(Column);
