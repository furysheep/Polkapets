import * as React from 'react';
import styled from 'styled-components/macro';
import { Title } from '../components/Title';
import { Lead } from '../components/Lead';
import { A } from 'app/components/A';

export function Features() {
  return (
    <Wrapper>
      <Title as="h2">HEADING</Title>
      <Lead>
        <strong>Lorem</strong> ipsum dolor sit amet, consectetur adipiscing
        elit. Aliquam bibendum tempor enim, massa ornare mattis euismod non. Sed
        viverra praesent cursus magna non fusce molestie elit sit. Nunc, laoreet
        sem orci, elementum felis. Diam cursus eget nisl id commodo.
      </Lead>
      <Title as="h2">VERIFIED SMART CONTRACTS</Title>
      <A
        href="https://etherscan.io/address/0xa49917db2c76887469257a7c2c747e0f7004f9e8"
        target="_blank"
        rel="noopener noreferrer"
      >
        0xa49917db2c76887469257a7c2c747e0f7004f9e8
      </A>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 3rem;
`;
