import { useSession } from 'next-auth/react';

const NotificationContent = () => {
  const { status } = useSession();

  return (
    <div className='flex h-fit max-h-[500px] flex-col gap-2 overflow-auto border-t-1 border-secondary-lightGrey/25 px-4 py-2'>
      <p className='italic self-center py-10 text-center font-jost text-lg'>
        {status === 'unauthenticated'
          ? 'Login to see notifications.'
          : 'No notifications yet.'}
      </p>
    </div>
  );
};

export default NotificationContent;
