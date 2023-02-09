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
    <main className='flex flex-col'>
      <Head>
        <title>Home page</title>
      </Head>

      <h1 className='mx-2'>List of posts</h1>

      <section>
        {postDataList.map((post: PostData) => (
          <Post {...post} key={post._id} />
        ))}
      </section>
    </main>
  )
}

export default IndexPage
