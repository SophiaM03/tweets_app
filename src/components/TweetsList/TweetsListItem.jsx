import React from 'react';
import Box from '@mui/material/Box';
import background from '../../images/background.png';
import logo from '../../images/logo.png';
import avatarPlacement from '../../images/avatar_placement.png';
import styled from '@emotion/styled';
import { useState } from 'react';
import { followUser } from 'services/tweetsApi';

const CardBackground = styled.img`
  position: absolute;
  width: 308px;
  left: 36px;
  top: 28px;
`;

const CardLogo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const CardLine = styled.div`
  position: absolute;
  height: 8px;
  background: #ebd8ff;
  top: 50%;
  left: ${({ left }) => (left ? '0px' : 'initial')};
  right: ${({ right }) => (right ? '0px' : 'initial')};
  transform: translate(0, -50%);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  width: 150px;
  z-index: 10;
`;

const AvatarPlacement = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 48.8%;
`;

const Circle = styled.img`
  width: 90px;
  height: 90px;
  position: absolute;
  z-index: 10;
`;

const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  width: 77px;
  border-radius: 50%;
  z-index: 1;
`;

const InfoContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

const Text = styled.p`
  text-transform: uppercase;
  color: #ebd8ff;
  margin-top: 16px;
  margin-bottom: 0;
  font-weight: 500;
`;

const Button = styled.button`
  width: 196px;
  border-radius: 10px;
  padding: 14px 56px;
  background: ${({ followed }) => (followed ? '#5CD3A8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  color: #373737;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  border: none;
  margin: 26px auto 36px;
  &:hover {
    cursor: pointer;
  }
`;

const Item = styled.li`
  margin: 15px;
`;

export default function TweetsListItem({ user }) {
  const [followers, setFollowers] = useState(user.followers);
  const [followed, setFollowed] = useState(user.followed);

  const handleFollow = () => {
    followUser({
      ...user,
      followed: !followed,
      followers: followed ? followers - 1 : followers + 1,
    }).then(({ followed, followers }) => {
      setFollowers(followers);
      setFollowed(followed);
    });
  };

  function updateNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <Item>
      <Box
        sx={{
          width: 380,
          height: 460,
          background:
            'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%) no-repeat',
          boxShadow: '-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)',
          borderRadius: '20px',
          position: 'relative',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.92, 0.92, 0.92],
            cursor: 'pointer',
          },
        }}
      >
        <CardBackground src={background} alt="background" />
        <CardLogo src={logo} alt="goit logo" />
        <CardLine left />
        <CardLine right />
        <AvatarPlacement>
          <Circle src={avatarPlacement} alt="circle" />
          <Avatar src={user.avatar} alt={user.user} />
        </AvatarPlacement>
        <InfoContainer>
          <Text>{updateNumber(user.tweets)} tweets</Text>
          <Text>followers: {updateNumber(followers)}</Text>
          <Button followed={followed} type="button" onClick={handleFollow}>
            {followed ? 'Following' : 'Follow'}
          </Button>
        </InfoContainer>
      </Box>
    </Item>
  );
}
