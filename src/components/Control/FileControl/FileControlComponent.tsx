import { FormControl, FormHelperText } from "@mui/material";
import {
  Controller,
  FieldPath,
  FieldValues,
  UseControllerProps,
  FieldErrors,
} from "react-hook-form";
import classes from "./file.module.scss";
import { ReactNode } from "react";

interface IFileControlProps<T extends FieldValues, TName extends FieldPath<T>>
  extends UseControllerProps<T, TName> {
  controlTitle: string;
  errorObj: FieldErrors;
  helperText?: string;
  type?: "number" | "text" | undefined;
}

export const FileControl = <T extends FieldValues, TName extends FieldPath<T>>({
  control,
  name,
  errorObj,
  helperText,
}: IFileControlProps<T, TName>) => {
  if (!control) return;

  const errorValue = errorObj[name]?.message ?? "";
  return (
    <Controller
      name={name}
      control={control ?? {}}
      render={({ field }) => (
        <FormControl fullWidth={true}>
          <div
            style={{
              height: "54px",
              display: "flex",
              alignItems: "center",
              fontFamily: "Nunito",
            }}
            id={"fileControl"}
          >
            <label
              style={{
                height: "54px",
                width: "83px",
                padding: "14px 15px",
                border: `${errorObj[name] ? "2px" : "1px"} solid ${
                  errorObj[name] ? "#CB3D40" : "black"
                } `,
                borderRadius: "4px 0px 0px 4px",
              }}
              htmlFor="photo"
            >
              Upload
            </label>
            <div
              className={classes.fileInput}
              style={{
                display: "block",
                textAlign: "start",
                padding: 14,
                height: "100%",
                flex: 1,
                borderTop: `${errorObj[name] ? "2px" : "1px"} solid ${
                  errorObj[name] ? "#CB3D40" : "#D0CFCF"
                } `,
                borderRight: `${errorObj[name] ? "2px" : "1px"} solid ${
                  errorObj[name] ? "#CB3D40" : "#D0CFCF"
                } `,
                borderBottom: `${errorObj[name] ? "2px" : "1px"} solid ${
                  errorObj[name] ? "#CB3D40" : "#D0CFCF"
                } `,
                borderRadius: "0px 4px 4px 0px",
              }}
            >
              {field.value ? field.value[0].name : "Upload your photo"}
              <input
                {...field}
                onChange={(event) => {
                  const files = event.target.files;
                  if (files) field.onChange([files[0]]);
                }}
                type="file"
                name="photo"
                id="photo"
                className="inputFile"
                accept=".jpg,.jpeg"
                value={""}
              />
            </div>
          </div>

          <FormHelperText component={"span"} id="my-helper-text">
            {errorObj[name] ? (
              <div style={{ color: "#CB3D40", height: 18 }}>
                {errorValue as ReactNode}
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
                >
                  {helperText ?? ""}
                </div>
              </div>
            )}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};
