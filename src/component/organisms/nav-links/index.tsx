
  import { links } from '@/constants/links/inedx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
   
  // ...
   
  export  const NavLinks =()=> {
    const pathname = usePathname();
 
    return (
      <>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 items-center${pathname ==link.href}`}
            ><div className=''>
                <Image src={link.icon} width={20} height={10}  alt='logo' /></div>
              <p className="hidden md:block">{link.name}</p> 
            </Link>
          );
        })}
      </>
    );
  }