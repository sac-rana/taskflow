'use client';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';

const EmailConfirmation = ({
  params: { key },
}: {
  params: { key: string };
}) => {
  const router = useRouter();
  return (
    <main className='flex flex-col items-center'>
      <div className='mt-12 text-center'>
        <p className='text-2xl my-5 mb-10'>
          Thank you for singing up to Taskflow. Click on the button below to
          confirm your email.
        </p>
        <Button
          onClick={async () => {
            try {
              const res = await fetch('/api/users/registration/verify-email/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ key: decodeURIComponent(key) }),
              });
              if (!res.ok) throw new Error(res.statusText);
              router.push('/login');
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Confirm Email
        </Button>
      </div>
    </main>
  );
};

export default EmailConfirmation;
