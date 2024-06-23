import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import UpdateDataDiri from "./UpdateDataDiri";
import UpdateDataPerangkat from "./UpdateDataPerangkat";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div class="py-12 flex flex-wrap justify-center">
                <div class="max-w-3xl mx-auto sm:px-6 lg:px-8 flex flex-col md:w-1/2">
                    <div class="max-w-xl mb-6">
                        <UpdateDataDiri />
                    </div>
                </div>

                <div class="max-w-3xl mx-auto sm:px-6 lg:px-8 flex flex-col md:w-1/2">
                    <div class="max-w-xl mb-6">
                        <UpdateDataPerangkat />
                        <div className="flex justify-end mt-9 gap-1">
                            <PrimaryButton
                                style={{ backgroundColor: "#FBA4AE" }}
                            >
                                Cancle
                            </PrimaryButton>
                            <PrimaryButton
                                style={{ backgroundColor: "#D3F8C9" }}
                            >
                                Submit
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

