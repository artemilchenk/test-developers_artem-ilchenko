import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg"];

function validateImageSize(file: File, minWidth: number, minHeight: number) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      if (img.naturalWidth >= minWidth && img.naturalHeight >= minHeight) {
        resolve(true);
      } else {
        reject("Minimum size of photo 70x70px.");
      }
    };
    img.onerror = function () {
      reject("Failed to load the image.");
    };
    img.src = URL.createObjectURL(file);
  });
}

export const schema = z.object({
  name: z
    .string()
    .min(2, "Username should contain 2-60 characters.")
    .max(60, "Username should contain 2-60 characters.")
    .refine(
      (value) => /^[\w.@+-]+$/.test(value ?? ""),
      "Username should contain 2-60 characters."
    ),
  email: z.string().min(6).max(100).email({
    message: "User email, must be a valid email according to RFC2822.",
  }),
  phone: z
    .string()
    .refine(
      (value) => /^[+]{0,1}380/.test(value ?? ""),
      "User phone number. Number should start with code of Ukraine +380."
    )
    .refine(
      (value) => /^[+]{0,1}380([0-9]{9})$/.test(value ?? ""),
      "Number should contains 9 characters after +380"
    ),
  position_id: z.number(),
  photo: z
    .any()
    .refine((files) => {
      return files?.length == 1;
    }, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `The photo size must not be greater than 5 Mb.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "The photo format must be jpeg/jpg type."
    )
    .refine(async (files) => {
      const file = files?.[0];
      try {
        return await validateImageSize(file, 70, 70);
      } catch (error) {
        console.error("Validation error:", error);
      }
    }, "Minimum size of photo 70x70px."),
});
