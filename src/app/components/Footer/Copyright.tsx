import * as React from 'react';
import styled from 'styled-components/macro';

export function Copyright() {
  return (
    <Wrapper>
      <Title>Copyright © 2021 Polka Pets World. All Rights Reserved</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 0.75rem;
  color: ${p => p.theme.textSecondary};
  margin-right: 1rem;
`;
