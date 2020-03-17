import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem/ListItem';
import { ListWrapper } from './List_s';


class List extends Component {
  static propTypes = {
    stories: PropTypes.array.isRequired,
  };

  listFilter = (type) => {
    let { stories } = this.props;
    if (type === 'points') {
      stories.sort((a, b) => (a.score < b.score) ? 1 : -1);
    } else if (type === 'date') {
      stories.sort((a, b) => (new Date(a.time) < new Date(b.time)) ? 1 : -1);
    }
    this.forceUpdate();
    window.scrollTo(0, 0);
  }

  render() {
    let { stories } = this.props;
    return (
      <ListWrapper>
        {stories.map(story => (
          <ListItem key={story.id} {...story} />
        ))}
      </ListWrapper>
    );
  }
}

export default List;
