import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a
        className={
          'mt-1 mr-3 rounded-lg border-0 bg-[#E7F3F9] p-2 text-xs font-medium uppercase text-[#3D9ACC] hover:bg-[#BEDEEF] hover:text-[#3D9ACC] dark:bg-transparent dark:hover:text-[#007DBC]'
        }
      >
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
