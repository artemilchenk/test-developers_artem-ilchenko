import { FormControl, FormHelperText } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { FC } from "react";
import { FieldErrors } from "react-hook-form/dist/types/errors";
import classes from "./file.module.scss";

interface ITextControlProps {
  control: Control;
  controlName: string;
  errorObj: FieldErrors;
  helperText?: string;
  setValue: (name: string, value: unknown, config?: object) => void;
}

export const FileControl: FC<ITextControlProps> = ({
  control,
  controlName,
  errorObj,
  helperText,
}) => {
  return (
    <Controller
      name={controlName}
      control={control}
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
                border: `${errorObj[controlName] ? "2px" : "1px"} solid ${
                  errorObj[controlName] ? "#CB3D40" : "black"
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
                borderTop: `${errorObj[controlName] ? "2px" : "1px"} solid ${
                  errorObj[controlName] ? "#CB3D40" : "#D0CFCF"
                } `,
                borderRight: `${errorObj[controlName] ? "2px" : "1px"} solid ${
                  errorObj[controlName] ? "#CB3D40" : "#D0CFCF"
                } `,
                borderBottom: `${errorObj[controlName] ? "2px" : "1px"} solid ${
                  errorObj[controlName] ? "#CB3D40" : "#D0CFCF"
                } `,
                borderRadius: "0px 4px 4px 0px",
              }}
            >
              {field.value ? field.value[0].name : "Upload your photo"}
              <input
                {...field}
                onChange={(event) => {
                  field.onChange([event.target?.files[0]]);
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

          <FormHelperText id="my-helper-text">
            {errorObj[controlName] ? (
              <div style={{ color: "#CB3D40", height: 18 }}>
                {errorObj[controlName].message}
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
