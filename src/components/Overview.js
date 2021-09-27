import styled from "styled-components";

// Import arrow svgs
import { ReactComponent as UpArrow } from "../svgs/icon-up.svg";
import { ReactComponent as DownArrow } from "../svgs/icon-down.svg";

// import helper function for logo selection
import { handlePlatformLogo } from "../utils/helpers";

const handleDeltaColour = (textcolour) => {
  if (textcolour === "up") {
    return "var(--limeGreen)";
  }
  if (textcolour === "down") {
    return "var(--brightRed)";
  }
};

const OverviewSection = styled.section`
  h2 {
    font-weight: 700;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  background: ${({ theme }) => theme.cardBg};
  margin-bottom: 1rem;
  border-radius: 5px;
  padding: 1.5rem;

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
  }

  .card-details {
    align-items: center;

    .card-details__total {
      font-weight: 700;
      color: ${({ theme }) => theme.textMajor};
      font-size: 2.29em;
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
  console.log(overview);

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
              <p className="col--left card-details__total">{total}</p>
              <p
                className={`col--right card-details__delta ${
                  deltaType === "up" ? "up" : "down"
                }`}
              >
                {deltaType === "up" ? (
                  <UpArrow className="arrow" />
                ) : (
                  <DownArrow className="arrow" />
                )}
                {delta}%
              </p>
            </div>
          </Card>
        ))}
      </Grid>
    </OverviewSection>
  );
};
