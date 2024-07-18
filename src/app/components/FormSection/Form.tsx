"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import TextInput from "../UI/TextInput";
import Button from "../UI/Button";

interface IFormInput {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
}

const Form = () => {
  const phoneNumberLength = 11;
  const minNameLength = 2;
  const maxNameLength = 15;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <div className="flex space-x-4">
        <div className="w-1/2">
          <TextInput
            labelText="First name"
            placeHolder="First name"
            formHookRegistration={{
              ...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 2,
                  message: `Min name length is ${minNameLength}`,
                },
                maxLength: {
                  value: 15,
                  message: `Max name length is ${maxNameLength}`,
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
        <div className="w-1/2">
          <TextInput
            labelText="Last name"
            placeHolder="Last name"
            formHookRegistration={{
              ...register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 2,
                  message: `Min name length is ${minNameLength}`,
                },
                maxLength: {
                  value: 15,
                  message: `Max name length is ${maxNameLength}`,
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
          labelText="Mobile number"
          placeHolder="Mobile number"
          formHookRegistration={{
            ...register("mobileNumber", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{phoneNumberLength}$/,
                message: `Mobile number must be ${phoneNumberLength} digits`,
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
          labelText="Email"
          placeHolder="Email"
          formHookRegistration={{
            ...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email address",
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
