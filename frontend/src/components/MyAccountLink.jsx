// MyAccountLink.jsx

import { NavLink } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { useUserStore } from "../stores/UserStore";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.Font1};

  &:hover {
    color: ${({ theme }) => theme.colors.BtnLinkHover};
  }

  &.active {
    color: ${({ theme }) => theme.colors.BtnLinkActive};
  }
`;

export const MyAccountLink = () => {
  const { user } = useUserStore();

  const linkText = user ? "Go to My Account" : "Login to your account";

  return (
    <StyledNavLink
      to={user ? "/my-account" : "/login"}
      aria-label={linkText}
      title={linkText}
    >
      <BsFillPersonFill style={{ fontSize: "25px" }} />
    </StyledNavLink>
  );
};
