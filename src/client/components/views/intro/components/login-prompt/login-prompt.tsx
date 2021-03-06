import * as React from "react";

import LoginButton from "../../../../login-button";
import Panel from "../../../../panel";

import * as STYLES from "./login-prompt.scss";

interface LoginPromptProps {
  onLoginClick: () => any;
  disableLogin: boolean;
}

const LoginPrompt = ({ onLoginClick, disableLogin }: LoginPromptProps) => {
  return (
    <div className={STYLES.loginPrompt}>
      <Panel>
        <div>To use this site you must log in with Battle.net!</div>
        <div className={STYLES.spacer} />
        <div>
          This allows us to save your selections, associate them with guild
          members, and stops people from taking the piss with made-up names in
          some kind of informal spreadsheet. Let's be honest, you would.
        </div>
        <div className={STYLES.spacer} />
        <LoginButton
          onClick={onLoginClick}
          disabled={disableLogin}
          text="Login"
        />
      </Panel>
    </div>
  );
};

export default LoginPrompt;
