import Button from "@/components/shared/Button";
import Checkbox from "@/components/shared/Checkbox";
import Input from "@/components/shared/Input";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center mb-5">Sign In</h1>
      <div className="flex flex-col gap-3">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <div className="flex justify-between">
          <Checkbox label="Rember me " />
          <Link href={"/forget-password"}>Forgate Password?</Link>
        </div>
        <Button>Login</Button>

        <div className="text-center">
        Don’t have account? <Link className="font-bold" href={'/signup'}> Register</Link> !
        </div>
      </div>
    </>
  );
};

export default LoginPage;
