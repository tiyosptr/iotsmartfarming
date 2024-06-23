import PrimaryButton from '@/components/PrimaryButton';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <div>
            {/* ... */}
            <PrimaryButton className="my-custom-class" disabled={false}>
                Get Started
            </PrimaryButton>
            {/* ... */}
        </div>
    );
}
