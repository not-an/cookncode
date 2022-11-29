import { PostData } from '../types/postdata'

export async function GetPost(id: string): Promise<PostData> {
  const response = await fetch(
    `https://api.cookncode.by/api/content/item/Post/${id}?populate=1`,
    {
      headers: {
        "api-key": "USR-be44e6aba2d5b750f35aca51da7d39a11bd95114"
      }
    }
  )
  const postData: PostData = (await response.json()) as PostData
  return postData
}

export async function GetPosts(): Promise<PostData[]> {
  const response = await fetch(
    'https://api.cookncode.by/api/content/items/Post',
    {
      headers: {
        "api-key": "USR-be44e6aba2d5b750f35aca51da7d39a11bd95114"
      }
    }
  )
  const postList: PostData[] = (await response.json()) as PostData[];
  console.log(postList);
  return postList
}
