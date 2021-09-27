import styled from "styled-components";

import {
  handleNumToK,
  handlePlatformLogo,
  handlePlatformColour,
} from "../utils/helpers";

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`;

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 1.6rem;
  border-top: 5px solid transparent;
  background-clip: content-box, border-box;

  ${(props) => handlePlatformColour(props.bordercolour)}

  .inner-card {
    background: ${({ theme }) => theme.cardBg};
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 700;

    svg {
      margin-right: 0.6rem;
    }

    p {
      font-size: 0.86em;
    }
  }

  .followers-data {
    &__num {
      font-weight: 700;
      font-size: 4.43em;
      color: ${({ theme }) => theme.textMajor};
    }
    &__text {
      text-transform: uppercase;
      font-size: 0.86em;
      letter-spacing: 5px;
      color: ${({ theme }) => theme.textMinor};
    }
  }
  .followers-delta {
    font-weight: 700;
  }
`;

export const Platforms = ({ data }) => {
  let platformData = data.platformData;
  console.log(platformData);

  return (
    <Grid>
      {platformData.map(
        ({ id, username, platform, followers, followersDelta, deltaType }) => (
          <Card key={id} bordercolour={platform}>
            <div className="inner-card">
              <div className="user-info">
                <div>{handlePlatformLogo(platform)}</div>
                <p>{username}</p>
              </div>
              <div className="followers-data">
                <p className="followers-data__num">{handleNumToK(followers)}</p>
                <p className="followers-data__text">followers</p>
              </div>
              <div className="followers-delta">{followersDelta} Today</div>
            </div>
          </Card>
        )
      )}
    </Grid>
  );
};
