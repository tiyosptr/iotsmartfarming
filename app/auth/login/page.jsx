"use client";
import { useEffect } from "react";
import Checkbox from "@/components/Checkbox";
import GuestLayout from "../../Layouts/GuestLayout";
import InputError from "../../../components/InputError";
import InputLabel from "../../../components/InputLabel";
import PrimaryButton from "../../../components/PrimaryButton";
import TextInput from "../../../components/TextInput";

export default function Login({ status, canResetPassword }) {


    return (
        <GuestLayout>

            <form >
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                       // value={data.email}
                        className="mt-1 block w-full"
                        //autoComplete="username"
                        //isFocused={true}
                        //onChange={(e) => setData("email", e.target.value)}
                    />

                     {/*  <InputError message={errors.email} className="mt-2" /> */}
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                       // value={data.password}
                        className="mt-1 block w-full"
                        //autoComplete="current-password"
                        //onChange={(e) => setData("password", e.target.value)}
                    />

                  {/*  <InputError message={errors.password} className="mt-2" /> */}
                </div>

                <div className="block mt-4">
                    {/* <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label> */}
                </div>

                <div className="flex items-center justify-end mt-4">
                    {/* {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )} */}

                    <PrimaryButton
                        style={{ backgroundColor: "#D3F8C9" }}
                        className="mb-5 font-bold"
                       //disabled={processing}
                    >
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
