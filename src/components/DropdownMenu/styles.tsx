import styled, { DefaultTheme } from "styled-components";
import { Colors } from "../../theme";
import { Text } from "../Text";
import {
  StyledDropdownMenuInnerLinkItemProps,
  StyledDropdownMenuItemProps,
} from "./types";

const getTextColor = ({
  $isActive,
  disabled,
  theme,
}: StyledDropdownMenuItemProps & {
  theme: DefaultTheme;
  $isActive: boolean;
}) => {
  if (disabled) return theme.colors.textDisabled;
  if ($isActive) return theme.colors.primary;

  return theme.colors.text;
};

export const InnerLinksBlockContainer = styled.div<{ padded: boolean }>`
  padding-top: 16px;
  padding-left: ${({ padded }) => padded && "62px"};
`;

export const DropdownMenuInnerLinkItem = styled.div<StyledDropdownMenuInnerLinkItemProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  &:hover {
    .inner-chevron {
      margin-right: 4px;
      transition: margin-right 150ms linear;
    }
  }
`;

export const DropdownMenuItem = styled.button<
  StyledDropdownMenuItemProps & {
    $isActive: boolean;
    $hasIcon?: boolean;
  }
>`
  align-items: center;
  border: 0;
  //background: transparent;
  color: ${({ theme, disabled, $isActive }) =>
    getTextColor({ theme, disabled, $isActive })};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-weight: ${({ $isActive = false }) => ($isActive ? "600" : "400")};
  display: inline-flex;
  font-size: 14px;
  height: 40px;
  justify-content: space-between;
  outline: 0;
  //padding-left: 16px;
  width: 100%;

  .arrow-icon {
    visibility: hidden;
    opacity: 0;
  }

  &:hover:not(:disabled) {
    color: ${({ theme, $hasIcon }) => !$hasIcon && theme.colors.primary};

    svg {
      opacity: 0.85;
    }

    .arrow-icon {
      visibility: visible;
      transition: visibility 250ms linear, opacity 150ms linear;
      opacity: 1;
    }
  }

  &:active:not(:disabled) {
    opacity: 0.85;
    transform: translateY(1px);
  }
`;

export const StyledDropdownMenuItemContainer = styled.div`
  margin-bottom: 16px;

  &:first-child > ${DropdownMenuItem} {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child > ${DropdownMenuItem} {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 24px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const DropdownMenuDivider = styled.hr`
  border-color: ${({ theme }) => theme.colors.gray200};
  border-style: solid;
  border-width: 1px 0 0;
  margin: 4px 0;
`;

export const StyledDropdownMenu = styled.div<{
  $isOpen: boolean;
  $isExtended?: boolean;
}>`
  background-color: ${({ theme }) => theme.card.background};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;

  padding: 24px;
  pointer-events: auto;
  width: 352px;
  visibility: visible;
  opacity: 1;
  transition: opacity 250ms linear, visibility 350ms linear;
  z-index: 1001;

  ${({ $isOpen }) =>
    !$isOpen &&
    `
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
  `}

  ${({ $isExtended }) =>
    $isExtended &&
    `
      -webkit-column-count: 2;
      -moz-column-count: 2;
      column-count: 2;
      -webkit-perspective:1;
      width: 680px;
  `}
`;

export const LinkStatus = styled(Text)<{ color: keyof Colors }>`
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 0 8px;
  border: 2px solid ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-left: 8px;
`;
