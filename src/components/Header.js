import styled from "styled-components";
import { handleNumSeparator } from "../utils/helpers";

const HeaderSection = styled.section`
  font-weight: 700;
  margin-bottom: 3rem;
  h1 {
    font-size: 1.71em;
    color: ${({ theme }) => theme.textMajor};
    margin-bottom: 0.8rem;
  }
  p {
    color: ${({ theme }) => theme.textMinor};
  }
`;

export const Header = ({ data }) => {
  const totalFollowers = data.followers[0].total;

  return (
    <HeaderSection>
      <h1>Social Media Dashboard</h1>
      <p>Total Followers: {handleNumSeparator(totalFollowers)}</p>
    </HeaderSection>
  );
};
