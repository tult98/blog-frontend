import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Icon from '~/components/elements/Icon'

interface Props {
  title: string
  description: string
  tags: string[]
  githubURL?: string
  deployURL?: string
}

const WorkItem = ({ title, description, tags, githubURL, deployURL }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const workItemRef = ref.current
    workItemRef?.addEventListener('mouseenter', onMouseEnter)
    workItemRef?.addEventListener('mouseleave', onMouseLeave)

    return () => {
      workItemRef?.removeEventListener('mouseenter', onMouseEnter)
      workItemRef?.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  const onMouseEnter = () => {
    setIsHover(true)
  }

  const onMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <div
      ref={ref}
      className="flex flex-col justify-between bg-navy-light py-8 px-7 rounded font-calibre translate hover:-translate-y-2 duration-200 cursor-pointer"
    >
      <div className="flex flex-row justify-between items-center">
        <Icon name="folder" style={`w-12 h-12 ${isHover ? 'text-green' : 'text-slate-light'}`} />
        <div className="flex flex-row items-center">
          {githubURL ? (
            <Link href={githubURL} passHref target="_blank">
              <Icon name="github" style="w-5 h-5 text-slate-light border-1 hover:text-green" />
            </Link>
          ) : null}
          {deployURL ? (
            <Link href={deployURL} passHref target="_blank">
              <Icon name="externalLink" style="w-6 h-6 text-slate-light ml-4 hover:text-green" />
            </Link>
          ) : null}
        </div>
      </div>
      <div>
        <h1 className={` text-xl mt-12 font-bold ${isHover ? 'text-green' : 'text-slate-light'}`}>{title}</h1>
        <p className="text-slate-light mt-4 text-lg">{description}</p>
      </div>
      <div className="mt-4 text-slate flex flex-row">
        {tags.map((tag, idx) => (
          <p className="font-sfmono text-xs mr-3" key={idx}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  )
}

export default WorkItem
