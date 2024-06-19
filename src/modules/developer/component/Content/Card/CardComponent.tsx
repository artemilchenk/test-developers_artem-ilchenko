import classes from "./card.module.scss";
import { FC } from "react";
import { AdaptiveImage } from "@/components/wrapper/Image/AdaptiveImage";
import { IDeveloperEntity } from "@/modules/developer/types";

interface ICardComponent {
  entity: Partial<IDeveloperEntity>;
}

export const CardComponent: FC<ICardComponent> = ({ entity, ...restProps }) => {
  return (
    <div {...restProps} className={classes.card}>
      <div className={classes.image}>
        <AdaptiveImage width={70} height={70} src={entity?.photo || ""} />
      </div>

      <div className={classes.cardTitle}>{entity?.name}</div>

      <div className={classes.description}>
        <div id={"1"} className={classes.description__item}>
          {entity?.position}
        </div>
        <div id={"2"} className={classes.description__item}>
          {entity?.email}
        </div>
        <div id={"3"} className={classes.description__item}>
          {entity?.phone}
        </div>
      </div>
    </div>
  );
};
