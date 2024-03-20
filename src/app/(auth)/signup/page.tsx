import Button from "@/components/shared/Button";
import Checkbox from "@/components/shared/Checkbox";
import Input from "@/components/shared/Input";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center mb-5">
        Create Account
      </h1>
      <div className="flex flex-col gap-3">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Comfirm Password" />

        <Checkbox label="Accept all terms & Conditions " />

        <Button>Create Account</Button>

        <div className="text-center">
          Already have account?{" "}
          <Link className="font-bold" href={"/login"}>
            Login
          </Link>
          !
        </div>
      </div>
    </>
  );
};

export default SignupPage;
