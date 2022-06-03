import React from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { Box } from "../../components/Box";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { ModalProps } from "./types";

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 32px 32px 24px;
  }
`;

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  //max-height: 90vh;
  overflow-y: auto;
  padding: 0 16px 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0 32px 32px;
  }
`;

export const ModalCloseButton: React.FC<{
  onDismiss: ModalProps["onDismiss"];
  closeBtnColor?: string;
}> = ({ onDismiss, closeBtnColor }) => {
  return (
    <IconButton
      variant="text"
      onClick={onDismiss}
      aria-label="Close the dialog"
    >
      <CloseIcon color={closeBtnColor || "dark600"} width="24px" />
    </IconButton>
  );
};

export const ModalBackButton: React.FC<{
  onBack: ModalProps["onBack"];
  closeBtnColor?: string;
}> = ({ onBack, closeBtnColor }) => {
  return (
    <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
      <ArrowBackIcon color="primary" />
    </IconButton>
  );
};

export const ModalContainer = styled(Box)<{
  minWidth: string;
  maxWidth?: string;
  background?: string;
}>`
  overflow: hidden;
  background: ${({ background }) => background || "white"};
  border-radius: 16px;
  width: 100%;
  max-height: 100vh;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: ${({ maxWidth }) => maxWidth || "100%"};
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
  }
`;
