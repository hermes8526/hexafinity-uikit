import React, { useCallback } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { connectorLocalStorageKey, walletLocalStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
}

const StyledButton = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px 0 0;
  white-space: nowrap;
  min-height: 91px;
`;

const StyledText = styled(Text)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss }) => {
  const handleClick = useCallback(() => {
    try{
      login(walletConfig.connectorId);
    } catch(e) {
      console.log(e, 'login');
      const helpWindow = window.open(walletConfig.helpHref, '_blank');
      helpWindow?.focus();
    }
    localStorage.setItem(walletLocalStorageKey, walletConfig.title);
    window.localStorage.setItem(
      connectorLocalStorageKey,
      walletConfig.connectorId
    );
    onDismiss();
  }, [])

  const { title, icon: Icon } = walletConfig;
  return (
    <StyledButton
      variant="tertiary"
      onClick={handleClick}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Icon width="32px" />
      <StyledText>{title}</StyledText>
    </StyledButton>
  );
};

export default WalletCard;
