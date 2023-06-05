import React from 'react';
import TweetsListItem from './TweetsListItem';
import styled from '@emotion/styled';
import Notification from 'components/Notification/Notification';

const List = styled.ul`
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export default function TweetsList({ tweets }) {
  if (!tweets.length) {
    return <Notification width={500} message="There are no results founded." />;
  }
  return (
    <List>
      {tweets.map(tweet => (
        <TweetsListItem key={tweet.id} user={tweet} />
      ))}
    </List>
  );
}
