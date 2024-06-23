import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

export default function UpdateDataPerangkat({}) {
    return (
        <section className>
            <header>
                <h2 className="text-lg font-bold text-black">Data Perangkat</h2>
            </header>

            <form className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name_kebun" value="Nama Kebun" />

                    <TextInput id="" className="w-full" />
                </div>

                <div>
                    <InputLabel
                        htmlFor="name_perangkat"
                        value="Nama perangkat"
                    />

                    <TextInput
                        id=""
                        className="w-full"
                        type="email"
                        required
                        autoComplete="username"
                    />
                </div>
                <div>
                    <InputLabel htmlFor="alamat" value="Alamat" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        className="w-full"
                        autoComplete="new-password"
                    />
                </div>
            </form>
        </section>
    );
}
