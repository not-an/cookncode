export interface PostData {
  userId: number
  _id: number
  Title: string
  Body: string
}

export interface PostDataProps {
  postData: PostData
}

export interface PostDataListProps {
  postDataList: PostData[]
}
