
import { dashboardLinks } from '@/constants/links/inedx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

  export  const NavLinks =()=> {
    const pathname = usePathname();
 
    return (
      <>
        {dashboardLinks.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.href} passHref
              className={`flex items-center justify-start gap-2 font-lusitana  font-[600] bg-[#d7a888] p-5 text-sm  hover:bg-[#f1e9e6] hover:text-[#d7a888]  ${pathname ==item.href &&"bg-[#f1e9e6] text-[#d7a888] "}`}
            ><div className='flex items-center gap-3 text-lg'>
               <span>{item.icon}</span>
              <p className="hidden md:block">{item.name}</p> 
              </div>
            </Link>
          );
        })}
      </>
    );
  }