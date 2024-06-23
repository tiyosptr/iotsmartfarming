"use client"
import { useEffect } from 'react';
import GuestLayout from "../../Layouts/GuestLayout";
import InputError from "../../../components/InputError";
import InputLabel from "../../../components/InputLabel";
import PrimaryButton from "../../../components/PrimaryButton";
import TextInput from "../../../components/TextInput";
import Link from 'next/link';
export default function Register() {
    return (
        <GuestLayout>

            <form >
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                       // value={data.name}
                        className="mt-1 block w-full"
                        //autoComplete="name"
                        //isFocused={true}
                        //onChange={(e) => setData('name', e.target.value)}
                        //required
                    />

                
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                       // value={data.email}
                        className="mt-1 block w-full"
                        //autoComplete="username"
                        //onChange={(e) => setData('email', e.target.value)}
                        //required
                    />


                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                      //  value={data.password}
                        className="mt-1 block w-full"
                       // autoComplete="new-password"
                        //onChange={(e) => setData('password', e.target.value)}
                        //required
                    />

                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                      //  value={data.password_confirmation}
                        className="mt-1 block w-full"
                       // autoComplete="new-password"
                        //onChange={(e) => setData('password_confirmation', e.target.value)}
                        //required
                    />

                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href=""
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" >
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
