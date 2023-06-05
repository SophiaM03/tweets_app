import React from 'react';
import Container from '@mui/material/Container';
import TweetsList from 'components/TweetsList/TweetsList';
import FilterTweets from 'components/FilterTweets/FilterTweets';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchUsers } from 'services/tweetsApi';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
  width: 196px;
  border-radius: 10px;
  padding: 14px 56px;
  background: '#ebd8ff';
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  color: #373737;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  outline: none;
  margin: 26px auto 36px;
  &:hover {
    cursor: pointer;
    background-color: #766a92;
    color: white;
  }
`;

export default function Tweets() {
  const [tweets, setTweets] = useState([]);
  const [filterValue, setFilterValue] = useState('all');
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchUsers(controller.signal)
      .then(tweets => {
        if (Array.isArray(tweets)) {
          setTweets(tweets);
        }
      })
      .catch(error => {
        console.log(error);
      });
    return () => controller.abort();
  }, [setTweets, filterValue]);

  const handleChange = e => {
    setFilterValue(e.target.value);
  };

  const filterTweets = () => {
    if (filterValue === 'all' || !filterValue) {
      return tweets;
    }
    return tweets.filter(item =>
      filterValue === 'follow' ? !item.followed : item.followed
    );
  };

  const filteredTweets = filterTweets();
  return (
    <Container maxWidth="xl">
      <Button onClick={handleGoBack}>Go back</Button>
      <Box
        sx={{
          width: '260px',
          margin: '20px auto',
        }}
      >
        <FilterTweets
          handleChange={handleChange}
          value={filterValue}
          options={[
            { value: 'all', label: 'All' },
            { value: 'follow', label: 'Follow' },
            { value: 'followings', label: 'Followings' },
          ]}
        />
      </Box>
      <TweetsList tweets={filteredTweets} />
    </Container>
  );
}
