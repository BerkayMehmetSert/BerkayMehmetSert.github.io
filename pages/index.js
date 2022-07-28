import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-[#001018] dark:text-[#F7F8F9] sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Hi 👋 I'm Berkay M. Sert
          </h1>
          <p className="text-lg leading-7 text-[#344450] dark:text-gray-400">
            {/*{siteMetadata.description}*/}
            I am a web developer and UI/UX designer. I love code, design, and illustrations.
            <br />
            Programmer by profession, developer for passion.
            <div className="mt-2 text-base font-medium leading-6">
              <Link
                href={`/about`}
                className="text-[#6366f1] hover:text-[#6366f1] hover:underline hover:underline-offset-2 dark:hover:text-[#6366f1]"
              >
                Read About Me
              </Link>
            </div>
          </p>
        </div>
        <div>
          <h2 className=" mt-4 text-2xl font-bold leading-9 tracking-tight text-[#001018] dark:text-[#F7F8F9] sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Latest blog posts
          </h2>
          <p className="text-lg leading-7 text-[#344450] dark:text-gray-400">Happy reading✌️</p>
          <ul className="divide-y divide-[#D9DDE1] dark:divide-[#344450]">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <li key={slug} className="py-10">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-[#8C96A2] dark:text-[#8C96A2]">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-4 xl:col-span-3">
                        <div className="space-y-4">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-[#001018] dark:text-[#EFF1F3]"
                              >
                                {title}
                              </Link>
                            </h2>
                          </div>
                          <div className="prose max-w-none text-[#344450] dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-[#6366f1] hover:text-[#6366f1] dark:hover:text-[#6366f1] "
                            aria-label={`Read "${title}"`}
                          >
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-[#6366f1] hover:text-[#6366f1] hover:underline hover:underline-offset-2 dark:hover:text-[#6366f1]"
              aria-label="all posts"
            >
              All Posts
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
