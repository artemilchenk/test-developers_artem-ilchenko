import classes from "./card-list.module.scss";
import { CardComponent } from "@/modules/developer/component/Content/Card";
import { useDevelopers } from "@/modules/developer/context";
import { v4 as uuidv4 } from "uuid";

export const CardListComponent = () => {
  const { developers } = useDevelopers();

  return (
    <div className={classes.cardList}>
      {developers.length ? (
        developers.map((card, index) => {
          return (
            <CardComponent
              key={uuidv4()}
              entity={{ ...card, id: index + 1 + "" }}
            />
          );
        })
      ) : (
        <div style={{ color: "darkred", fontSize: 28, fontFamily: "Nunito" }}>
          Data not found...
        </div>
      )}
    </div>
  );
};
