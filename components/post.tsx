import Link from 'next/link'
import { PostData } from '../types/postdata'

export default function Post({ Title, Body, _id }: PostData) {
  return (
    <article>
      <h2>{Title}</h2>
      <div dangerouslySetInnerHTML={{ __html: Body }}></div>
      <Link href={`/post/${_id}`}>Read more...</Link>
    </article>
  )
}
