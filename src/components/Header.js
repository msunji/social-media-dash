import styled from "styled-components";
import { handleNumSeparator } from "../utils/helpers";

const HeaderSection = styled.section`
  font-weight: 700;
  margin-bottom: 3rem;

  p {
    color: ${({ theme }) => theme.textMinor};
  }

  .header {
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.textMinor};
    margin-bottom: 1.7rem;
    padding-bottom: 1.7rem;
    h1 {
      font-size: 1.71em;
      color: ${({ theme }) => theme.textMajor};
      margin-bottom: 0.8rem;
    }
  }
`;

const ToggleContainer = ({ toggle }) => {
  return (
    <label htmlFor="checkbox">
      <input type="checkbox" id="checkbox" onClick={toggle} />
      {/* <div className="slider"></div> */}
    </label>
  );
};

export const Header = (props) => {
  const totalFollowers = props.data.followers[0].total;

  return (
    <HeaderSection>
      <div className="header">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: {handleNumSeparator(totalFollowers)}</p>
      </div>
      <ToggleContainer toggle={props.toggle}>
        <p>Dark Mode</p>
        <ToggleContainer />
      </ToggleContainer>
    </HeaderSection>
  );
};
