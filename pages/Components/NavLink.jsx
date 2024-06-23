import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold leading-5 transition duration-150  focus:outline-none " +
                (active
                    ? "border-black-900 focus:border- "
                    : "border-transparent  ") +
                className
            }
        >
            {children}
        </Link>
    );
}
