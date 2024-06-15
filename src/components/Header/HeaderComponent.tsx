import classes from "./header.module.scss";
import globalClasses from "@/styles/global.module.scss";
import { Logo } from "@/assets/svg";
import { LogoText } from "@/assets/svg/LogoText";
import { BaseButton } from "@/ui/BaseButton/BaseButtonComponent";

export const HeaderComponent = () => {
  return (
    <div className={classes.header}>
      <div className={globalClasses.container}>
        <div className={globalClasses.section}>
          <div className={classes.wrapper}>
            <div className={classes.logo}>
              <Logo />
              <LogoText />
            </div>
            <div id="actions">
              <BaseButton>Users</BaseButton>
              <BaseButton style={{ marginLeft: 10 }}>Sign Up</BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
