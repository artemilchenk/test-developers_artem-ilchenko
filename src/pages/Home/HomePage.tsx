import { GreetComponent } from "@/components/Greet";
import { HeaderComponent } from "@/components/Header";
import globalClasses from "@/styles/global.module.scss";
import classes from "./home-page.module.scss";
import { ContentComponent } from "@/modules/developer/component/Content";
import { RegisterComponent } from "@/modules/developer/component/Register";
import { DevelopersProvider } from "@/modules/developer/context";

export function HomePage() {
  return (
    <div className={classes.home}>
      <HeaderComponent />

      <div className={globalClasses.container}>
        <GreetComponent />

        <DevelopersProvider>
          <ContentComponent />
          <RegisterComponent />
        </DevelopersProvider>
      </div>
    </div>
  );
}
