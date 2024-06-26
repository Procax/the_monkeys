import type { Metadata } from 'next';

import ProfileSection from './components/ProfileSection';

const title = 'Profile';
const description = 'We are The Monkeys! A blogging and educational platform.';

export const metadata: Metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='mb-20 min-h-screen mx-auto w-full'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-2/6 w-full'>
          <ProfileSection />
        </div>
        <div className='lg:w-4/6 w-full'>{children}</div>
      </div>
    </div>
  );
}
