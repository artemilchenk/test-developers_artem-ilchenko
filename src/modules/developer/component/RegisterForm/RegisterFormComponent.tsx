import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FieldPath, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import classesRegister from "./register-form.module.scss";
import { TextControl } from "@/components/Control/TextControl/TextControlComponent";
import { BaseButton } from "@/ui/BaseButton/BaseButtonComponent";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { RadioButton } from "@/ui/RadioButton";
import { FileControl } from "@/components/Control/FileControl";
import { useQuery } from "react-query";
import { schema } from "@/modules/developer/component/RegisterForm/schema";
import { developerService } from "@/modules/developer";
import { fileToBinaryString } from "@/utils/fileToBinaryString";
import { useDevelopersData } from "@/modules/developer/hook";
import { IPositionItem } from "@/modules/developer/types";
import { AxiosError } from "axios";
import { v4 as uuidv4 } from "uuid";

export type FormFields = z.infer<typeof schema>;

export const RegisterForm = () => {
  const { data: positions } = useQuery(
    "positions",
    developerService.getPositions.bind(developerService)
  );

  const { mutateAsync, isLoadingRegister } = useDevelopersData();

  const {
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const file = data?.photo[0];

    if (file) {
      fileToBinaryString(file, async function (binaryString: string) {
        try {
          await mutateAsync({
            ...data,
            photo: binaryString,
          });
          reset();
        } catch (err: unknown) {
          const error = err as AxiosError;
          if (error.response?.status && error.response?.status > 200) {
            setError("root.serverError", {
              type: error.response?.status + "",
            });
          }
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div key={1} id={"1"} className={classesRegister.control}>
        <TextControl
          control={control}
          name={"name" as FieldPath<FormFields>}
          controlTitle={"Your Name"}
          errorObj={errors}
        />
      </div>

      <div key={2} id={"2"} className={classesRegister.control}>
        <TextControl
          control={control}
          name={"email" as FieldPath<FormFields>}
          controlTitle={"Email"}
          errorObj={errors}
        />
      </div>

      <div key={3} id={"3"} className={classesRegister.control}>
        <TextControl
          control={control}
          name={"phone" as FieldPath<FormFields>}
          controlTitle={"Phone"}
          errorObj={errors}
          type={"number"}
          helperText={"+38 (XXX) XXX - XX - XX"}
        />
      </div>

      <div id={"4"} className={classesRegister.control}>
        <Controller
          name={"position_id"}
          control={control}
          render={({ field }) => (
            <FormControl>
              <FormLabel
                sx={{
                  textAlign: "start",
                  color: "black",
                  fontFamily: "Nunito",
                  fontSize: 16,
                  lineHeight: "26px",
                  "&.Mui-focused": {
                    color: "#7E7E7E",
                  },
                }}
                id="demo-radio-buttons-group-label"
              >
                Select your position
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                {positions?.map((position: IPositionItem) => {
                  return (
                    <FormControlLabel
                      key={uuidv4()}
                      {...field}
                      onChange={() => {
                        field.onChange(position.id);
                      }}
                      value={position.id}
                      control={
                        <Radio
                          icon={<RadioButton />}
                          checkedIcon={<RadioButton checked={true} />}
                        />
                      }
                      label={
                        <div className={classesRegister.formLabel}>
                          {position.name}
                        </div>
                      }
                    />
                  );
                })}
              </RadioGroup>
              <FormHelperText component={"span"} id="my-helper-text">
                {errors.position_id ? (
                  <div style={{ color: "#CB3D40", height: 18 }}>
                    {errors.position_id.message}
                  </div>
                ) : (
                  <div style={{ height: 18, width: "100%" }}>
                    {" "}
                    <div
                      style={{
                        fontSize: 12,
                        fontFamily: "Nunito",
                        color: "#7E7E7E",
                        lineHeight: "14px",
                        height: 18,
                      }}
                    ></div>
                  </div>
                )}
              </FormHelperText>
            </FormControl>
          )}
        />
      </div>

      <div className={classesRegister.control}>
        <FileControl
          control={control}
          name={"photo" as FieldPath<FormFields>}
          controlTitle={"Photo"}
          errorObj={errors}
        />
      </div>

      <div>
        <BaseButton disabled={isSubmitting}>
          {isLoadingRegister ? "Loading..." : "Submit"}
        </BaseButton>

        <FormHelperText component={"span"} id="my-helper-text">
          {errors.root?.serverError ? (
            <div style={{ color: "#CB3D40", height: 18, textAlign: "center" }}>
              {errors.root?.serverError.type === 401 && "Unauthorized"}
            </div>
          ) : (
            <div style={{ height: 18, width: "100%" }}>
              {" "}
              <div
                style={{
                  fontSize: 12,
                  fontFamily: "Nunito",
                  color: "#7E7E7E",
                  lineHeight: "14px",
                  height: 18,
                }}
              ></div>
            </div>
          )}
        </FormHelperText>
      </div>
    </form>
  );
};
