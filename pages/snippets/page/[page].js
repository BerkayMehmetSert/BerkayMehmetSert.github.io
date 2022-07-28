import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import ListLayout from '@/layouts/ListLayout'
import { SNIPPETS_PER_PAGE } from '../../snippets'
import SnippetsLayout from '@/layouts/SnippetsLayout'

export async function getStaticPaths() {
  const totalPosts = await getAllFilesFrontMatter('snippets')
  const totalPages = Math.ceil(totalPosts.length / SNIPPETS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    params: { page },
  } = context
  const posts = await getAllFilesFrontMatter('snippets')
  const pageNumber = parseInt(page)
  const initialDisplayPosts = posts.slice(
    SNIPPETS_PER_PAGE * (pageNumber - 1),
    SNIPPETS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / SNIPPETS_PER_PAGE),
  }

  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination,
    },
  }
}

export default function SnippetPage({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <SnippetsLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Snippets"
      />
    </>
  )
}
