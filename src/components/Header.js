import styled from "styled-components";
import { handleNumSeparator } from "../utils/helpers";
import { breakpoints } from "../styles/constants";

const HeaderSection = styled.section`
  font-weight: 700;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr;

  p {
    color: ${({ theme }) => theme.textMinor};
  }

  .header {
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.textMinor};
    margin-bottom: 1.7rem;
    padding-bottom: 1.7rem;

    h1 {
      font-size: 1.71rem;
      line-height: 1.1;
      color: ${({ theme }) => theme.textMajor};
      margin-bottom: 0.8rem;
    }
  }

  @media screen and ${breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);

    .header {
      border: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
`;

const DarkModeFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and ${breakpoints.lg} {
    justify-self: flex-end;
    align-self: center;
  }
`;

const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  background: ${({ theme }) => theme.toggle};
  border-radius: 12px;
  transition: background 0.4s ease;
  margin-left: 1rem;
  z-index: 1;

  &:hover {
    &::before {
      opacity: 1;
    }
  }

  &::before {
    position: absolute;
    content: "";
    border-radius: 12px;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      21deg,
      rgba(55, 143, 230, 1) 23%,
      rgba(62, 218, 130, 1) 98%
    );
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s linear;
  }

  #checkbox {
    opacity: 0;
    width: 0;
    height: 0;

    // &:checked + .slider {
    //   // background: linear-gradient(
    //   //   21deg,
    //   //   rgba(55, 143, 230, 1) 23%,
    //   //   rgba(62, 218, 130, 1) 98%
    //   // );
    // }
    z-index: 1;

    &:checked + .slider::before {
      transform: translateX(24px);
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;

    &::before {
      position: absolute;
      content: "";
      top: 3px;
      left: 3px;
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
