import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useStaticQuery, graphql } from 'gatsby';

const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 40px;
  margin-bottom: 24px;

  h2 {
    margin: 0;
    border: none;
    padding: 0;
    font-size: 18px;

    @media (max-width: 359px) {
      font-size: 14px;
    }
    span.white {
      color: #fff;
    }
    span.primary {
      color: #ffce22ff;
    }
    span.secondary {
      color: #bb0002ff;
    }
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    margin-right: 16px;
    color: #fff;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media (min-width: 780px) {
    display: none;
  }
`;

export default function Header({ handleMenuOpen }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `,
  );

  const { siteTitle } = site.siteMetadata;

  return (
    <Container>
      <button aria-label="Open sidebar" type="button" onClick={handleMenuOpen}>
        <GiHamburgerMenu size={23} aria-hidden="true" />
      </button>
      {/* <h2>{siteTitle}</h2> */}
      <h2>
        <span class="secondary">cy</span>
        <span class="white">.</span>
        <span class="secondary">br</span>
        <span class="white">/</span>
        <span class="primary">dys</span>
        <span class="white">.</span>
        <span class="primary">top</span>
        <span class="white">.</span>
        <span class="primary">ia</span>
      </h2>
    </Container>
  );
}

Header.propTypes = {
  handleMenuOpen: PropTypes.func.isRequired,
};