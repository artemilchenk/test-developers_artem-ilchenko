import globalClasses from "@/styles/global.module.scss";
import classesRegister from "@/modules/developer/component/RegisterForm/register-form.module.scss";
import { RegisterForm } from "@/modules/developer/component/RegisterForm";

export const RegisterComponent = () => {
  return (
    <div className={globalClasses.section}>
      <div className={classesRegister.title}> Working with POST request</div>
      <div className={classesRegister.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};
