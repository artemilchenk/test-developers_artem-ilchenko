import { FormControl, FormHelperText, TextField } from "@mui/material";
import {
  Controller,
  FieldErrors,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { ReactNode } from "react";

interface ITextControlProps<T extends FieldValues, TName extends FieldPath<T>>
  extends UseControllerProps<T, TName> {
  controlTitle: string;
  errorObj: FieldErrors;
  helperText?: string;
  type?: "number" | "text" | undefined;
}

export const TextControl = <T extends FieldValues, TName extends FieldPath<T>>({
  control,
  name,
  controlTitle,
  errorObj,
  type,
  helperText,
}: ITextControlProps<T, TName>) => {
  const errorValue = errorObj[name]?.message ?? "";
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth={true}>
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                fontFamily: "Nunito",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: `${errorObj[name] ? "#CB3D40" : "#D0CFCF"}`,
                },
                "&.Mui-focused": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: `${errorObj[name] ? "#CB3D40" : "#D0CFCF"}`,
                    borderWidth: "1px",
                  },
                },

                "&:hover:not(.Mui-focused)": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: `${errorObj[name] ? "#CB3D40" : "#D0CFCF"}`,
                  },
                },
              },
              "& .MuiInputLabel-outlined": {
                fontFamily: "Nunito",
                color: "#7E7E7E",
                "&.Mui-focused": {
                  color: "#7E7E7E",
                },
              },
            }}
            {...field}
            fullWidth={true}
            id="outlined-basic"
            label={controlTitle}
            variant="outlined"
            type={type}
          />
          <FormHelperText component={"span"} id="my-helper-text">
            <div style={{ height: 18, width: "100%" }}>
              {errorValue as ReactNode}
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
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};
