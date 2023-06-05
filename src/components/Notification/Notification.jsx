import React from 'react';
import styled from '@emotion/styled';

const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  width: ${({ width }) => (width ? width : 'auto')};
`;

export default function Notification({ message, width = 200 }) {
  return <Text width={width}>{message}</Text>;
}
