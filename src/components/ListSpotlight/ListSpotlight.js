import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem/ListItem';
import BackToTop from 'components/BackToTop/BackToTop';

import { ListWrapper, SpotlightWrapper, SpotlightFooter } from './ListSpotlight_s';

class ListSpotlight extends Component {
  static propTypes = {
    stories: PropTypes.array.isRequired,
  };

  render() {
    const { stories } = this.props;
    let spotlightStories = stories.sort((a, b) => (a.score < b.score) ? 1 : -1).slice(0, 3);
    let listSpotlight = spotlightStories.filter(function (story) {
      return story.score;
    });

    return (
      <div>
        <SpotlightWrapper>
          <ListWrapper>
            <h2>{'Spotlight'}</h2>
            {listSpotlight.map(story => (
              <ListItem key={story.id} {...story} />
            ))}
          </ListWrapper>
          <SpotlightFooter>
            <BackToTop></BackToTop>
          </SpotlightFooter>
        </SpotlightWrapper>

      </div>
    );
  }
}

export default ListSpotlight;
