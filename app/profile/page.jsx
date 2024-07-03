"use client";
import InputLabel from "@/components/InputLabel";
import TextInput from "@/components/TextInput";
import Header from "@/components/Header";
import PrimaryButton from "@/components/PrimaryButton";

export default function UpdateDataDiri() {
  return (
    <section className="min-h-screen">
      <Header />

      <div className="max-w-md mx-auto">
        <div className="mt-8">
          <h2 className="text-lg font-bold text-black text-center">
            Data Diri
          </h2>

          <form className="mt-6 space-y-6">
            <div>
              <InputLabel htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                className="w-full"
                style={{ border: "1px solid #ccc", padding: "7px" }}
              />
            </div>

            <div>
              <InputLabel htmlFor="current_password" value="No Telephone" />
              <TextInput
                id="current_password"
                type="password"
                className="w-full shadow-sm"
                autoComplete="current-password"
                style={{ border: "1px solid #ccc", padding: "7px" }}
              />
            </div>

            <div>
              <InputLabel htmlFor="password" value="Password" />
              <TextInput
                id="password"
                type="password"
                className="w-full shadow-sm"
                autoComplete="password"
                style={{ border: "1px solid #ccc", padding: "7px" }}
              />
            </div>
            <div>
              <InputLabel htmlFor="confirm_password" value="Confirm Password" />
              <TextInput
                id="confirm_password"
                type="password"
                className="w-full shadow-sm"
                autoComplete="confirm-password"
                style={{ border: "1px solid #ccc", padding: "7px" }}
              />
            </div>

            <div className="flex items-center justify-end">
              <div class="max-w-xl mb-6">
                <div className="flex justify-end mt-9 gap-1">
                  <PrimaryButton style={{ backgroundColor: "#FBA4AE" }}>
                    Cancle
                  </PrimaryButton>
                  <PrimaryButton style={{ backgroundColor: "#D3F8C9" }}>
                    Submit
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
