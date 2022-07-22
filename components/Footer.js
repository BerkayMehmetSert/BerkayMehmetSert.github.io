import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-[#8C96A2] dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <Link href="/">{siteMetadata.footerTitle}</Link>
          <div>{` • `}</div>
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <Link href="/blog">Blog</Link>
          <div>{` • `}</div>
          <Link href="/projects">Projects</Link>
          <div>{` • `}</div>
          <Link href="/about">About</Link>
        </div>
      </div>
    </footer>
  )
}
