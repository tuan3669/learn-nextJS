import React from 'react'
import { GetStaticProps, GetStaticPropsContext } from 'next'
interface PostListPageProps {
  posts: any[]
}

export default function PostListPage(props: PostListPageProps) {
  return <div>PostListPage</div>
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  return {
    props: {
      posts: []
    }
  }
}
