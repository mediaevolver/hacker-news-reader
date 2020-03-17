import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Nav from 'components/Nav/Nav';
import List from 'components/List/List';
import ListSpotlight from 'components/ListSpotlight/ListSpotlight';
import Loader from 'components/Loader/Loader';
import { AppWrapper, BodyWrapper } from './App_s';

class App extends Component {
  static defaultProps = {
    stories: [],
  };

  static propTypes = {
    stories: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    storyIds: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    hasMoreStores: PropTypes.bool.isRequired,
    fetchStories: PropTypes.func.isRequired,
    fetchStoriesFirstPage: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchStoriesFirstPage();
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };

  filterDate = () => {
    this.filteredStories.listFilter('date');
  }

  filterPoints = () => {
    this.filteredStories.listFilter('points');
  }

  render() {
    const { stories, hasMoreStores } = this.props;
    return (
      <AppWrapper>
        <Nav goLatest={this.filterDate} goPoints={this.filterPoints} />
        <BodyWrapper>
          <InfiniteScroll
            dataLength={stories.length}
            next={this.fetchStories}
            hasMore={hasMoreStores}
            loader={<Loader />}
            style={{
              height: '100%',
              overflow: 'visible',
            }}>
            <List ref={(stories) => this.filteredStories = stories} stories={stories} />
          </InfiniteScroll>
          <ListSpotlight stories={stories} />
        </BodyWrapper>
      </AppWrapper>
    );
  }
}

export default App;
