import React, {FC} from "react";
import styled from "styled-components";
import IconComponent from "../../Svg/IconComponent";
import {Flex} from "../../Box";
import {Text} from "../../Text";
import {MenuItemContentProps} from "../types";

const IconComponentWrap = styled.div`
  align-self: flex-start;
`
const MenuItemContent: FC<MenuItemContentProps> = ({
  leftIcon,
  label,
  description,
  rightIcon,
  fill = "primary",
}) => (
  <>
    {leftIcon && (
      <IconComponentWrap>
        <IconComponent width={40} iconName={leftIcon}/>
      </IconComponentWrap>
    )}
    <Flex flexDirection={"column"} flex={1} paddingLeft={leftIcon && "16px"}>
      {label}
      {description && (
        <Text fontSize={"12px"} color={"gray900"} lineHeight="16px">
          {description}
        </Text>
      )}
    </Flex>
    {rightIcon && (
      <IconComponent className="arrow-icon" iconName={rightIcon} color={fill}/>
    )}
  </>
);

export default MenuItemContent;
