import classes from "./greet.module.scss";
import pic from "@/assets/images/GreetPic.jpg";
import { BaseButton } from "@/ui/BaseButton/BaseButtonComponent";

export const GreetComponent = () => {
  return (
    <div className={classes.wrapper}>
      <img src={pic} alt="pic" />

      <div className={classes.text}>
        <div className={classes.title}>
          Test assignment for front-end developer
        </div>
        <div className={classes.description}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </div>

        <BaseButton>Sign Up</BaseButton>
      </div>
    </div>
  );
};
