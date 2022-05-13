import styled from "styled-components";
import { breakpoints } from "../styles/constants";

import {
  handleNumToK,
  handlePlatformLogo,
  handlePlatformColour,
  handleArrows,
} from "../utils/helpers";

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  margin-bottom: 3rem;

  @media screen and ${breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and ${breakpoints.xl} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  position: relative;
  border-radius: 0 0 5px 5px;
  margin-bottom: 1.6rem;
  background: ${({ theme }) => theme.cardBg};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 0 0 5px 5px;
  transition: all 0.4s ease-in;

  &:hover {
    background: ${({ theme }) => theme.cardHover};
  }

  &::before {
    content: "";
    position: absolute;
    height: 4px;
    width: 100%;
    top: -5px;
    left: 0;
    ${(props) => handlePlatformColour(props.bordercolour)}
    border-radius: 5px 5px 0 0;
  }

  .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 700;
    margin-bottom: 1.8rem;

    svg {
      margin-right: 0.6rem;
    }

    p {
      font-size: 0.86rem;
    }
  }

  .followers-data {
    margin-bottom: 2.2rem;
    &__num {
      font-weight: 700;
      font-size: 4rem;
      color: ${({ theme }) => theme.textMajor};
      margin-bottom: 0.8rem;
      letter-spacing: -2px;
    }
    &__text {
      text-transform: uppercase;
      font-size: 0.86rem;
      letter-spacing: 5px;
      color: ${({ theme }) => theme.textMinor};
    }
  }
  .followers-delta {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 0.86rem;

    svg {
      margin-right: 5px;
      transform: scale(1.4);
    }

    &.up {
      color: var(--limeGreen);
    }
    &.down {
      color: var(--brightRed);
    }
  }

  @media screen and ${breakpoints.lg} {
    &:not(:nth-of-type(2n)) {
      margin-right: 1rem;
    }
  }

  @media screen and ${breakpoints.xl} {
    &:not(:nth-of-type(4n)) {
      margin-right: 1rem;
  }
`;

export const Platforms = ({ data }) => {
  let platformData = data.platformData;

  return (
    <Grid>
      {platformData.map(
        ({ id, username, platform, followers, followersDelta, deltaType }) => (
          <Card key={id} bordercolour={platform}>
            <div className="user-info">
              <div>{handlePlatformLogo(platform)}</div>
              <p>{username}</p>
            </div>
            <div className="followers-data">
              <p className="followers-data__num">{handleNumToK(followers)}</p>
              <p className="followers-data__text">followers</p>
            </div>
            <div
              className={`followers-delta ${
                deltaType === "up" ? "up" : "down"
              }`}
            >
              {handleArrows(deltaType)}
              {followersDelta} Today
            </div>
          </Card>
        )
      )}
    </Grid>
  );
};
