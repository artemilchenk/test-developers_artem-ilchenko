import classes from "./card-list.module.scss";
import { CardComponent } from "@/modules/developer/component/Content/Card";
import { useDevelopers } from "@/modules/developer/context";

export const CardListComponent = () => {
  const { developers } = useDevelopers();

  return (
    <div className={classes.cardList}>
      {developers.length ? (
        developers.map((card, index) => {
          return (
            <CardComponent
              id={card.id}
              entity={{ id: index + 1 + "", ...card }}
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
