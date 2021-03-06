import { connect } from 'react-redux';
import Search from './Search';
import { fetchRooms } from '../../actions/room_actions';
import { selectAllRooms } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state) => {
  return ({
    rooms: selectAllRooms(state),
    place: state.filters.place,
    minBeds: state.filters.minBeds,
    maxBeds: state.filters.maxBeds
    // currentbench: selectSingleBench(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchRooms: () => dispatch(fetchRooms()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
