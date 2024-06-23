import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faBaby, faBell, faBellConcierge, faBellSlash } from "@fortawesome/free-solid-svg-icons";
import ApplicationLogo from "@/components/ApplicationLogo";
import Dropdown from "@/components/Dropdown";
import NavLink from "@/components/NavLink";
import ResponsiveNavLink from "@/components/ResponsiveNavLink";

import { Link } from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen">
            <nav
                style={{ backgroundColor: "#8EDF78" }}
                className="border-b border-gray-100"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/">
                                    {/* <ApplicationLogo className="block h-9 w-auto fill-current t" /> */}
                                </Link>
                            </div>
                        </div>
                        <div className="space-x-5 text-white sm:-my-px sm:ml-5 sm:flex text-center">
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Dashboard
                            </NavLink>

                            <NavLink
                                href={route("editprofile")}
                                active={route().current("editprofile")}
                            >
                                Profile
                            </NavLink>
                        </div>

                        <div className="flex items-center">
                            {/* Icon notification */}
                            <div className="relative">
                                <FontAwesomeIcon
                                    icon={faBell}
                                    className="text-black cursor-pointe\"
                                    onClick={() =>
                                        alert(
                                            "Notifikasi:\nPenyiraman pada 12:00\nPenyiraman pada 10:00\nPenyiraman pada 08:00"
                                        )
                                    }
                                />
                                <span className="absolute top-0 right-0 h-2 w-2  rounded-full"></span>
                            </div>

                            <div
                                style={{ backgroundColor: "#D3F8C9" }}
                                className="py-3 rounded-2xl text-black bg-green-300 px-4 ml-2"
                            >
                                <NavLink
                                    href={route("logout")}
                                    active={route().current("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Logout
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {user.email}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}
