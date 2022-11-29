import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { PostData, PostDataProps } from '../../types/postdata'
import { GetPosts, GetPost } from '../../lib/postdata_api'

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const postList: PostData[] = await GetPosts()
  return {
    paths: postList.map((post) => {
      return {
        params: {
          id: post._id.toString(),
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostDataProps, Params> = async (
  context
) => {
  const { id } = context.params! as Params
  const postData: PostData = await GetPost(id)
  return {
    props: {
      postData,
    },
  }
}

const Post: NextPage<PostDataProps> = ({ postData }: PostDataProps) => {
  return (
    <main>
      <Head>
        <title>{postData.Title}</title>
      </Head>

      <h1>{postData.Title}</h1>

      <p dangerouslySetInnerHTML={{ __html: postData.Body }}></p>

      <Link href="/">Go back to home</Link>
    </main>
  )
}

export default Post
