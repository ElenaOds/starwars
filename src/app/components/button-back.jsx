import Link from 'next/link';
import Image from "next/image";

export default function ButtonBack() {

      return (
        <>
       <Link href='/heroes' className="flex justify-center items-center p-1 w-14 h-5 bg-amber-400 rounded-md border-none hover:bg-blue-500 text-white text-xs mb-10">
       <Image
        src='/icons/arrow.svg'
        alt="arrow back"
        width={12}
        height={12}
        className="fill-white mr-0.5"
      /> Back</Link>
        </>
      );
    }
    