import Link from 'next/link';
import Image from 'next/image';
import { PostData } from '../types/postdata'

export default function Post({ Title, Body, _id, Preview, ...rest}: PostData) {
  return (
    <div className='basis-1/3 p-4'>
      <Link 
        href={`/post/${_id}`} 
        className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md w-full h-full flex flex-col hover:shadow-sm transition-shadow duration-300'
      >
        {rest?.Image && 
          <Image 
            src={`https://api.cookncode.by/storage/uploads${rest.Image.path}`} 
            alt={Title} 
            width={rest.Image.width}
            height={rest.Image.height}
          />
        }
        <h2 className='text-2xl font-bold px-4 pt-2'>{Title}</h2>
        <div className='p-4' dangerouslySetInnerHTML={{ __html: Preview }}></div>        
      </Link>
    </div>
  )
}
