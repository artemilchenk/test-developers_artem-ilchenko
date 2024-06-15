import { FormControl, FormHelperText, TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { FC } from "react";
import { FieldErrors } from "react-hook-form/dist/types/errors";

interface ITextControlProps {
  control: Control;
  controlName: string;
  controlTitle: string;
  errorObj: FieldErrors;
  type?: "number" | "text";
  helperText?: string;

}

export const TextControl: FC<ITextControlProps> = ({
  control,
  controlName,
  controlTitle,
  errorObj,
  type,
  helperText,
}) => {
  return (
    <Controller
      name={controlName}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth={true}>
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                fontFamily: "Nunito",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: `${
                    errorObj[controlName] ? "#CB3D40" : "#D0CFCF"
                  }`,
                },
                "&.Mui-focused": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: `${
                      errorObj[controlName] ? "#CB3D40" : "#D0CFCF"
                    }`,
                    borderWidth: "1px",
                  },
                },

                "&:hover:not(.Mui-focused)": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: `${
                      errorObj[controlName] ? "#CB3D40" : "#D0CFCF"
                    }`,
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
