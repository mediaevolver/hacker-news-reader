import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import getSiteHostname from 'utils/getSiteHostname';
import getArticleLink, { HN_USER, HN_ITEM } from 'utils/getArticleLink';

import { Item, Title, Host, ExternalLink, Description, CommentLink } from './ListItem_s';

const ListItem = ({ by, kids = [], score, url, title, id, time }) => {
  const site = getSiteHostname(url) || 'news.ycombinator.com';
  const link = getArticleLink({ url, id });
  const commentUrl = `${HN_ITEM}${id}`;

  return (
    <Item>
      <ExternalLink href={link} rel="nofollow noreferrer noopener" target="_blank">
        <Title>
          {title}
        </Title>
      </ExternalLink>
      <Description>
        {score} points ::
        <CommentLink href={`${HN_USER}${by}`} rel="nofollow noreferrer noopener" target="_blank">
          {by}
        </CommentLink>
        <CommentLink href={commentUrl} rel="nofollow noreferrer noopener" target="_blank">
          {kids.length} Comments
        </CommentLink>
        <TimeAgo date={new Date(time * 1000).toISOString()} />
      </Description>
      <Host>{site}</Host>
    </Item>
  );
};

ListItem.propTypes = {
  by: PropTypes.string.isRequired,
  kids: PropTypes.array,
  score: PropTypes.number.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default ListItem;
