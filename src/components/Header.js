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

const DarkModeFlex = styled.div`
  display: flex;
  align-items: center;
`;

const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  background: ${({ theme }) => theme.toggle};
  border-radius: 12px;
  // transition: all 0.4s ease;
  margin-left: 1rem;

  &:hover {
    background: linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%));
  }

  #checkbox {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider::before {
      transform: translateX(24px);
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 3px;
    left: 3px;
    right: 0;
    bottom: 0;

    &::before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      background: ${({ theme }) => theme.topBg};
      border-radius: 50%;
      transition: transform 0.25s linear;
    }
  }
`;

const ToggleContainer = ({ toggle }) => {
  return (
    <StyledToggle htmlFor="checkbox">
      <input type="checkbox" id="checkbox" onClick={toggle} />
      <span className="slider"></span>
    </StyledToggle>
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
      <DarkModeFlex>
        <p>Dark Mode</p>
        <ToggleContainer toggle={props.toggle} />
      </DarkModeFlex>
    </HeaderSection>
  );
};
