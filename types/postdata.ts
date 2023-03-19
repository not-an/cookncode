export interface PostData {
  userId: number
  _id: number
  Title: string
  Body: string;
  Image: {path: string, width: number, height: number};
  Preview: string;
}

export interface PostDataProps {
  postData: PostData
}

export interface PostDataListProps {
  postDataList: PostData[]
}
