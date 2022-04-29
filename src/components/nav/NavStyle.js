import styled from "styled-components";

export const NavBarCont = styled.nav`
  position: fixed;
  top: 0;
  background: white;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px;
  z-index: 4;
  background-color: var(--light-opac);
  backdrop-filter: blur(23px);
`;

export const NavFolder = styled.div`
  display: flex;
  height: 100%;
  width: fit-content;
  align-items: center;
`;

export const LinkList = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;
  gap: 16px;
  @media (max-width: 1180px) {
    position: absolute;
    z-index: -1;
    top: 86px;
    right: 0;
    width: 100%;
    height: calc(100vh - 72px);
    flex-direction: column;
    justify-content: flex-start;
    transition: transform 0.8s;
    background-color: hsl(270, 9%, 17%);
    background-image: url(${`${process.env.PUBLIC_URL}/dev16Images/insureImages/bg-pattern-mobile-nav.svg`});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100%;
    ${(props) =>
      props.navModal
        ? "transform: translateX(0%);"
        : "transform: translateX(150%);"};
  }
`;

export const IconsList = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;
`;

export const LinkCont = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled.button`
  position: relative;
  font: var(--nav);
  color: var(--dark);
  padding: 10px;
  min-width: 120px;
  border: 1px solid var(--primary);
  border-radius: 6px;
  background-color: var(--light);
  transition: all 0.1s;
  cursor: pointer;
  & svg {
    margin-right: 4px;
    fill: var(--dark);
    ${({ highlight }) =>
      highlight &&
      `
      fill: var(--light);  
    `}
  }
  @media (max-width: 1180px) {
    width: 80%;
    height: 4rem;
    margin: 8px 0px;
  }

  ${({ highlight }) =>
    highlight
      ? `
      border: none;
      color: var(--light);
      background-color: var(--dark);  
    `
      : `
      &:hover {
        background-color: var(--dark);
        color: var(--light);
        border: 1px solid var(--light);
        & svg {
            fill: var(--light);
        }
      }
    `}
`;

export const NavIcon = styled.a`
  position: relative;
  background: none;
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: center;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6);
  height: calc(3em - 8px);
  width: calc(3em - 8px);
  margin: 0px 8px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.8);
    transform: translateY(-2px);
  }
`;

export const LogoIcon = styled.div`
  height: fit-content;
  width: fit-content;
  position: relative;
`;

export const SandwichIcon = styled.button`
  position: absolute;
  height: 32px;
  width: 32px;
  border: 2px solid hsl(270, 9%, 17%);
  background: none;
  transition: all 0.1s;
  margin: 0px 8px;
  opacity: 0;
  pointer-events: none;
  @media (max-width: 1180px) {
    opacity: 1;
    pointer-events: auto;
    position: relative;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export const Line1 = styled.div`
  width: 60%;
  height: 2px;
  border-radius: 1px;
  position: absolute;
  transition: transform 0.5s;
  background-color: hsl(270, 9%, 17%);
  ${(props) =>
    props.navModal
      ? "top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(45deg);"
      : "top: 33%; left: 50%; transform: translate(-50%, -50%);"}
`;
export const Line2 = styled.div`
  width: 60%;
  height: 2px;
  border-radius: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: hsl(270, 9%, 17%);
  ${(props) => props.navModal && "display: none;"}
`;
export const Line3 = styled.div`
  width: 60%;
  height: 2px;
  background-color: hsl(270, 9%, 17%);
  border-radius: 1px;
  position: absolute;
  transition: transform 0.5s;
  ${(props) =>
    props.navModal
      ? "top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-45deg);"
      : "top: 67%;; left: 50%; transform: translate(-50%, -50%);"}
`;

export const TabIndicator = styled.div`
  position: absolute;
  height: 1px;
  width: 100%;
  bottom: 2px;
  transform: ${(props) =>
    props.currentTab ? `translateX(-8px)` : `translateX(100%)`};
  background: linear-gradient(
    90deg,
    #bf953f -65%,
    #fcf6ba -26.33%,
    #b38728 20.08%,
    #fbf5b7 63.91%,
    #aa771c 100%
  );
  @media (max-width: 1180px) {
    height: 100%;
    width: 1px;
    left: 0px;
    bottom: 0px;
    transform: ${(props) =>
      props.currentTab ? `translateX(0px)` : `translateY(110%)`};
  }
`;

export const EstimateBtn = styled.button`
  background-color: var(--primary);
  color: var(--light);
  font: var(--nav);
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--light);
  cursor: pointer;
  & svg {
    margin-right: 8px;
  }
  &:hover {
    background-color: var(--secondary);
  }
`;
