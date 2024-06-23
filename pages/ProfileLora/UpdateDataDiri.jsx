import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

export default function UpdateDataDiri({}) {
    return (
        <section className>
            <header>
                <h2 className="text-lg font-bold text-black">Data Diri</h2>
            </header>

            <form className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className=" w-full"
                        autoComplete="username"
                    />
                </div>
                <div>
                    <InputLabel htmlFor="no_telp" value="No Telpone" />

                    <TextInput
                        id="no_telp"
                        className="w-full"
                        autoComplete="no_telp"
                    />
                </div>
                <div>
                    <InputLabel htmlFor="password" value="New Password" />

                    <TextInput
                        id="password"
                        type="password"
                        className="w-full shadow-sm"
                        autoComplete="new-password"
                    />
                </div>
                <div>
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        className="w-full"
                        autoComplete="new-password"
                    />
                </div>
                <div className="flex items-center gap-4"></div>
            </form>
        </section>
    );
}
