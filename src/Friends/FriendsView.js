import React, { Component } from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class FriendsView extends Component {
  render() {
    const { friends } = this.props

    return (
      <ListGroup>
        {friends.map(friend => (
          <ListGroupItem key={friend.id} href={friend.id}><img src={friend.icon.avatar} /> {friend.name}</ListGroupItem>
        ))}
      </ListGroup>
    )
  }
}

export default FriendsView