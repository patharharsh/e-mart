import Button from "@/components/shared/Button";
import Checkbox from "@/components/shared/Checkbox";
import Input from "@/components/shared/Input";
import Link from "next/link";
import React from "react";

const ForgetPassPage = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center mb-5">
        Forget Password
      </h1>
      <div className="flex flex-col gap-3">
        <Input type="email" placeholder="Email" />

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

export default ForgetPassPage;
