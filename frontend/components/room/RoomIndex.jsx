import React from 'react';
import RoomIndexItem from './RoomIndexItem';

class RoomIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRooms();
  }

  render() {
    const { rooms } = this.props;
    const roomItems = rooms.map( room => <RoomIndexItem key={room.id} room={room} />);
    
    return (
      <section className="room-index">
        <ul>
          { roomItems }
        </ul>
      </section>
    );
  }
}

export default RoomIndex;
