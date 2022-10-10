import React, {
  cloneElement,
  Children,
  ReactElement,
  useState,
  useEffect,
} from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { space, SpaceProps } from "styled-system";
import { scales, variants } from "./types";
import { ButtonMenuProps } from "./types";
import getRgba from "../../util/getRgba";
import { useMatchBreakpoints } from "../../hooks";

interface StyledButtonMenuProps extends ButtonMenuProps {
  theme: DefaultTheme;
}

interface IWrapper extends SpaceProps {
  variant: string;
  withoutBackground?: boolean;
  fullWidth: boolean;
  flatTop: boolean;
  flatBottom: boolean;
  scrollX: boolean;
}

interface ISelection {
  offset: number;
  width: number;
  scale: string;
  variant: string;
  flatTop: boolean;
  flatBottom: boolean;
}

const Wrapper = styled.div<IWrapper>`
  background-color: ${({ theme, withoutBackground, variant }) =>
    withoutBackground
      ? "transparent"
      : variant === variants.DARK
      ? theme.colors.tooltip
      : getRgba(theme.colors.pastelBlue, theme, 0.08)};
  position: relative;
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  border-radius: 10px;
  overflow: hidden;

  padding: ${({ flatBottom, flatTop }) =>
    flatBottom || flatTop ? "0 4px" : "4px"};

  ${({ scrollX }) =>
    scrollX &&
    css`
      overflow-x: scroll;
    `};

  ${({ flatTop }) =>
    flatTop &&
    css`
      border-radius: 0 0 8px 8px;
    `}

  ${({ flatBottom }) =>
    flatBottom &&
    css`
      border-radius: 8px 8px 0 0;
    `}

  &::-webkit-scrollbar {
    display: none;
  }

  ${space}
`;

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
  position: relative;
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  & > button,
  & > div,
  & > a {
    flex-grow: 1;
  }

  & > button,
  & > div,
  & a {
    box-shadow: none;
  }

  ${({ disabled, theme, variant }) => {
    if (disabled) {
      return `
        opacity: 0.5;

        & > button:disabled {
          background-color: transparent;
          color: ${
            variant === variants.DARK
              ? theme.colors.pastelBlue
              : theme.colors.text
          };
        }
    `;
    }
    return "";
  }}
`;

const Selection = styled.div<ISelection>`
  background-color: ${({ theme, variant }) =>
    theme.colors[
      variant === variants.DARK
        ? "dropDown"
        : variant === variants.LIGHT
        ? "white"
        : "warning"
    ]};
  width: ${({ width }) => `${width}px`};
  height: calc(100% - 8px);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ offset }) => `${offset + 4}px`};
  transition: left 0.3s ease, width 0.3s ease;
  border-radius: ${({ scale }) => (scale === scales.SM ? "6px" : "8px")};

  ${({ flatTop, scale }) =>
    flatTop &&
    css`
      border-radius: ${scale === scales.SM ? "0 0 6px 6px" : "0 0 8px 8px"};
      height: calc(100% - 4px);
      top: calc(50% - 2px);
    `}

  ${({ flatBottom, scale }) =>
    flatBottom &&
    css`
      border-radius: ${scale === scales.SM ? "6px 6px 0 0" : "8px 8px 0 0"};
      height: calc(100% - 4px);
      top: calc(50% + 2px);
    `}

  ${({ theme, variant }) =>
    variant === variants.DARK &&
    `box-shadow: 0 2px 4px ${getRgba(
      theme.colors.backgroundDark,
      theme,
      0.08
    )}`};
`;

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  scale = scales.MD,
  variant = variants.DARK,
  onItemClick,
  disabled,
  children,
  fullWidth = false,
  flatBottom = false,
  flatTop = false,
  withoutBackground = false,
  scrollX = false,
  ...props
}) => {
  const { isDesktop, isMobile, isTablet } = useMatchBreakpoints();

  const [widthsArr, setWidthsArr] = useState([]);

  const [blockOffset, setBlockOffset] = useState(0);

  useEffect(() => {
    if (widthsArr) {
      setBlockOffset(
        widthsArr.slice(0, activeIndex).reduce((sum, elem) => sum + elem, 0)
      );
    }
  }, [widthsArr, activeIndex, isDesktop, isMobile, isTablet]);

  return (
    <Wrapper
      flatBottom={flatBottom}
      flatTop={flatTop}
      fullWidth={fullWidth}
      withoutBackground={withoutBackground}
      variant={variant}
      scrollX={scrollX}
      {...props}
    >
      {!disabled && (
        <Selection
          flatTop={flatTop}
          flatBottom={flatBottom}
          scale={scale}
          width={widthsArr[activeIndex]}
          offset={blockOffset}
          variant={variant}
        />
      )}
      <StyledButtonMenu
        disabled={disabled}
        variant={variant}
        fullWidth={fullWidth}
        withoutBackground={withoutBackground}
        {...props}
      >
        {Children.map(children, (child: ReactElement, index) => {
          return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? () => onItemClick(index) : undefined,
            setWidth: setWidthsArr,
            itemIndex: index,
            blockOffset,
            scale,
            variant,
            disabled,
            flatBottom,
            flatTop,
          });
        })}
      </StyledButtonMenu>
    </Wrapper>
  );
};

export default ButtonMenu;
