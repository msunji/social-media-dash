import styled from "styled-components";

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
  }
`;

export const Overview = ({ data }) => {
  let overview = data.overview;
  console.log(overview);

  return (
    <OverviewSection>
      <h2>Overview - Today</h2>
      <Grid>
        {overview.map(({ platform, type, total, delta, deltaType }) => (
          <Card>
            <div className="row card-header">
              <p className="col--left">{type}</p>
              <p className="col--right">icon goes here</p>
            </div>
            <div className="row card-details">
              <p className="col--left">{total}</p>
              <p className="col--right">{delta}</p>
            </div>
          </Card>
        ))}
      </Grid>
    </OverviewSection>
  );
};
