"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import TextInput from "../UI/TextInput";
import Button from "../UI/Button";
import { insertUser } from "../../redux/store";
import User from "../../types/User";
import { useAppDispatch } from "../../redux/hooks";
import { useTranslations } from "next-intl";

export interface IFormInput {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
}

const Form = () => {
  const t = useTranslations("form");

  const phoneNumberLength = 11;
  const minNameLength = 2;
  const maxNameLength = 15;

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    const partialUser: User = {
      FirstName: data.firstName,
      LastName: data.lastName,
      Phone: data.mobileNumber,
      Email: data.email,
    };
    dispatch(insertUser(partialUser));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <div className="flex gap-4 justify-between flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2">
          <TextInput
            labelText={t("firstName")}
            placeHolder={t("firstName")}
            formHookRegistration={{
              ...register("firstName", {
                required: t("errors.firstNameRequired"),
                minLength: {
                  value: 2,
                  message: t("errors.minNameLenError", { minNameLength }),
                },
                maxLength: {
                  value: 15,
                  message: t("errors.maxNameLenError", { maxNameLength }),
                },
              }),
            }}
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">
              {errors.firstName.message}
            </span>
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <TextInput
            labelText={t("lastName")}
            placeHolder={t("lastName")}
            formHookRegistration={{
              ...register("lastName", {
                required: t("errors.lastNameRequired"),
                minLength: {
                  value: 2,
                  message: t("errors.minNameLenError", { minNameLength }),
                },
                maxLength: {
                  value: 15,
                  message: t("errors.maxNameLenError", { maxNameLength }),
                },
              }),
            }}
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">
              {errors.lastName.message}
            </span>
          )}
        </div>
      </div>
      <div>
        <TextInput
          labelText={t("mobileNumber")}
          placeHolder={t("mobileNumber")}
          formHookRegistration={{
            ...register("mobileNumber", {
              required: t("errors.mobileNumberRequired"),
              pattern: {
                value: /^[0-9]{11}$/,
                message: t("errors.invalidPhoneNumber", {
                  phoneNumberLength,
                }),
              },
            }),
          }}
        />
        {errors.mobileNumber && (
          <span className="text-red-500 text-sm">
            {errors.mobileNumber.message}
          </span>
        )}
      </div>
      <div>
        <TextInput
          labelText={t("email")}
          placeHolder={t("email")}
          formHookRegistration={{
            ...register("email", {
              required: t("errors.emailRequired"),
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: t("errors.invalidEmail"),
              },
            }),
          }}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <Button text="Send" type="submit" />
    </form>
  );
};

export default Form;
