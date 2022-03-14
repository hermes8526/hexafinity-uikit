/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect, useState } from "react";
import { usePopper } from "react-popper";
import { useOnClickOutside } from "../../hooks";
import { MenuContext } from "../../widgets/Menu/context";
import { Box } from "../Box";
import MenuItemContent from "./MenuItemContent";

import {
  DropdownMenuDivider,
  DropdownMenuItem,
  StyledDropdownMenu,
  // LinkStatus,
  StyledDropdownMenuItemContainer,
} from "./styles";
import { DropdownMenuItemType, DropdownMenuProps } from "./types";
import InnerLinksBlock from "./InnerLinksBlock";

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  isBottomNav = false,
  showItemsOnMobile = false,
  activeItem = "",
  items = [],
  index,
  isExtended = false,
  setMenuOpenByIndex,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const [isOpen, setIsOpen] = useState(false);
  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null);
  const hasItems = items.length > 0;
  const { styles, attributes } = usePopper(targetRef, tooltipRef, {
    strategy: isBottomNav ? "absolute" : "fixed",
    placement: isBottomNav ? "top" : "bottom-start",
    modifiers: [
      { name: "offset", options: { offset: [0, isBottomNav ? 6 : 0] } },
    ],
  });

  const isMenuShow =
    isOpen && ((isBottomNav && showItemsOnMobile) || !isBottomNav);

  useEffect(() => {
    const showDropdownMenu = () => {
      setIsOpen(true);
    };

    const hideDropdownMenu = (evt: MouseEvent | TouchEvent) => {
      const target = evt.target as Node;
      return target && !tooltipRef?.contains(target) && setIsOpen(false);
    };

    targetRef?.addEventListener("mouseenter", showDropdownMenu);
    targetRef?.addEventListener("mouseleave", hideDropdownMenu);

    return () => {
      targetRef?.removeEventListener("mouseenter", showDropdownMenu);
      targetRef?.removeEventListener("mouseleave", hideDropdownMenu);
    };
  }, [targetRef, tooltipRef, setIsOpen, isBottomNav]);

  useEffect(() => {
    if (setMenuOpenByIndex && index !== undefined) {
      setMenuOpenByIndex((prevValue) => ({
        ...prevValue,
        [index]: isMenuShow,
      }));
    }
  }, [isMenuShow, setMenuOpenByIndex, index]);

  useOnClickOutside(
    {
      current: targetRef,
    },
    () => {
      setIsOpen(false);
    }
  );

  return (
    <Box ref={setTargetRef} {...props}>
      <Box
        onPointerDown={() => {
          setIsOpen((s) => !s);
        }}
      >
        {children}
      </Box>
      {hasItems && (
        <StyledDropdownMenu
          style={styles.popper}
          ref={setTooltipRef}
          {...attributes.popper}
          $isBottomNav={isBottomNav}
          $isOpen={isMenuShow}
          $isExtended={isExtended}
        >
          {items
            .filter((item) => !item.isMobileOnly)
            .map(
              (
                {
                  type = DropdownMenuItemType.INTERNAL_LINK,
                  label,
                  rightIconFill,
                  description,
                  href = "/",
                  status,
                  leftIcon = "",
                  rightIcon = "",
                  links = [],
                  bannerRenderer,
                  extended = false,
                  ...itemProps
                },
                itemItem
              ) => {
                const getMenuItemContent = (icon: string = rightIcon) => (
                  <MenuItemContent
                    label={label}
                    fill={rightIconFill}
                    leftIcon={leftIcon}
                    rightIcon={icon}
                    description={description}
                    status={status}
                  />
                );
                const isActive = href === activeItem;
                const hasInnerLinks = links.length > 0;

                return (
                  <StyledDropdownMenuItemContainer key={itemItem}>
                    {type === DropdownMenuItemType.BUTTON && (
                      <DropdownMenuItem
                        $isActive={isActive}
                        $hasIcon={!!leftIcon}
                        type="button"
                        {...itemProps}
                      >
                        {getMenuItemContent("")}
                      </DropdownMenuItem>
                    )}
                    {type === DropdownMenuItemType.INTERNAL_LINK && (
                      <>
                        <DropdownMenuItem
                          $isActive={isActive}
                          $hasIcon={!!leftIcon}
                          as={linkComponent}
                          href={href}
                          onClick={() => {
                            setIsOpen(false);
                          }}
                          {...itemProps}
                        >
                          {getMenuItemContent("ArrowForward")}
                        </DropdownMenuItem>
                        {hasInnerLinks && (
                          <InnerLinksBlock
                            links={links}
                            leftIcon={leftIcon}
                            setIsOpen={setIsOpen}
                            linkComponent={linkComponent}
                          />
                        )}
                      </>
                    )}
                    {type === DropdownMenuItemType.EXTERNAL_LINK && (
                      <DropdownMenuItem
                        $isActive={isActive}
                        $hasIcon={!!leftIcon}
                        as="a"
                        href={href}
                        target="_blank"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        {...itemProps}
                      >
                        {getMenuItemContent("ArrowUpForward")}
                      </DropdownMenuItem>
                    )}
                    {type === DropdownMenuItemType.DIVIDER && (
                      <DropdownMenuDivider />
                    )}
                    {type === DropdownMenuItemType.BANNER &&
                      bannerRenderer &&
                      bannerRenderer()}
                  </StyledDropdownMenuItemContainer>
                );
              }
            )}
        </StyledDropdownMenu>
      )}
    </Box>
  );
};

export default DropdownMenu;
