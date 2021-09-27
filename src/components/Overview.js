import styled from "styled-components";
import { breakpoints } from "../styles/constants";

// import helper function for logo selection
import {
  handlePlatformLogo,
  handleNumToK,
  handleArrows,
} from "../utils/helpers";

const OverviewSection = styled.section`
  h2 {
    font-weight: 700;
    font-size: 1.71rem;
    margin-bottom: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and ${breakpoints.lg} and (max-width: 999px) {
    grid-template-columns: repeat(3, 1fr);

    > div:not(:nth-of-type(3n)) {
      margin-right: 1rem;
    }
  }
  @media screen and ${breakpoints.xl} {
    grid-template-columns: repeat(4, 1fr);

    > div:not(:nth-of-type(4n)) {
      margin-right: 1rem;
    }
  }
`;

const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  background: ${({ theme }) => theme.cardBg};
  margin-bottom: 1rem;
  border-radius: 5px;
  padding: 1.5rem;
  transition: all 0.4s ease-in;

  &:hover {
    background: ${({ theme }) => theme.cardHover};
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .col--left {
      justify-self: flex-start;
    }
    .col--right {
      justify-self: flex-end;
    }
  }
  .card-header {
    font-weight: 700;
    margin-bottom: 1.5rem;
    align-items: center;
  }

  .card-details {
    align-items: center;

    .card-details__total {
      font-weight: 700;
      color: ${({ theme }) => theme.textMajor};
      font-size: 2.29rem;
    }

    .card-details__delta {
      display: flex;
      align-items: center;
      font-weight: 700;

      .arrow {
        transform: scale(1.3);
        margin-right: 5px;
      }

      &.up {
        color: var(--limeGreen);
      }
      &.down {
        color: var(--brightRed);
      }
    }
  }
`;

export const Overview = ({ data }) => {
  let overview = data.overview;

  return (
    <OverviewSection>
      <h2>Overview - Today</h2>
      <Grid>
        {overview.map(({ id, platform, type, total, delta, deltaType }) => (
          <Card key={id}>
            <div className="row card-header">
              <p className="col--left">{type}</p>
              <p className="col--right">{handlePlatformLogo(platform)}</p>
            </div>
            <div className="row card-details">
              <p className="col--left card-details__total">
                {handleNumToK(total)}
              </p>
              <p
                className={`col--right card-details__delta ${
                  deltaType === "up" ? "up" : "down"
                }`}
              >
                {handleArrows(deltaType)}
                {delta}%
              </p>
            </div>
          </Card>
        ))}
      </Grid>
    </OverviewSection>
  );
};
