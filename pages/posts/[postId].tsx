import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

interface PostDetailPageProps {
  post: any
}

export default function PostDetailPage({ post }: PostDetailPageProps) {
  const router = useRouter()
  if (!post) return
  console.log('post', post)
  const { data } = post
  return (
    <div>
      <h1>PostDetailPage</h1>
      <p>{data.title}</p>
      <p>{data.author}</p>
      {JSON.stringify(router.query)}x
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('geStaticPaths')
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?page=1')
  const data = await response.json()

  return {
    paths: data.map((x: any) => ({ params: { postId: x.id } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('getStaticProps : ', context.params?.postId)
  const postId = context.params?.postId
  if (!postId) {
    return {
      notFound: true
    }
  }

  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
  const data = await response.json()

  return {
    props: {
      post: { data }
    }
  }
}
