import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import Post from '../components/post'
import { PostData, PostDataListProps } from '../types/postdata'
import { GetPosts } from '../lib/postdata_api'

export const getStaticProps: GetStaticProps = async (_context) => {
  // fetch list of posts
  const posts: PostData[] = await GetPosts();
  console.log(posts);
  return {
    props: {
      postDataList: posts,
    },
  }
}

const IndexPage: NextPage<PostDataListProps> = ({
  postDataList,
}: PostDataListProps) => {
  return (
    <>
      <Head>
        <title>Cookncode</title>
      </Head>
      <div className='mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto'>

      </div>

      <main className='flex w-full flex-col items-center justify-center py-32'>
        <div className='relative max-w-xl px-5 xl:px-0 w-full'>
          <input 
            type="text" 
            className="block w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100" 
            placeholder="Найти рецепт"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>        
        </div>
        <div className='flex my-10 w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] xl:px-0'>
          {postDataList.map((post: PostData) => (
            <Post {...post} key={post._id} />
          ))}
        </div>
      </main>
    </>
  )
}

export default IndexPage
