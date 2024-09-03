import { getServerSession } from 'next-auth';
import Container from '../ui/Container';
import { authOptions } from '@/libs/next-auth';
import UserAvatar from './user-avatar/UserAvatar';
import Logo from './Logo';
import NavbarRoutes from './NavbarRoutes';
import MobileNavbarMenu from './MobileNavbarMenu';

async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className='border-b py-3'>
      <Container isFullHeight className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-x-6'>
          <div className='hidden md:block'>
            <Logo />
          </div>
          <div className='hidden md:block'>
            <NavbarRoutes session={session} />
          </div>
          <div className='block md:hidden'>
            <MobileNavbarMenu session={session} />
          </div>
        </div>
        <div className='flex items-center justify-start gap-x-6'>
          <UserAvatar session={session} />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
