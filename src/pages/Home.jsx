import React from 'react';
import Container from '@mui/material/Container';
import { Navigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  color: #766a92;
`;

const TweetsLink = styled(Link)`
  text-decoration: underline;
  color: #1976d2;
`;

export default function Home() {
  const location = useLocation();
  if (location.pathname !== '/') {
    return <Navigate to="/" />;
  }
  return (
    <Container maxWidth="xl">
      <Title>
        Check your tweets here <TweetsLink to="tweets">TWEETS</TweetsLink>
      </Title>
    </Container>
  );
}
