import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResult} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  console.log('SearchResults props :', props);
  const searchString = props.match.params.searchString;
  console.log(getCardsForSearchResult);
  return {
    cards: getCardsForSearchResult(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResults);
