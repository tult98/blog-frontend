import TopicButton from '~/components/elements/TopicButton'

const dumpData = [
  { name: 'React', url: '/react' },
  { name: 'Animation', url: '/animation' },
  { name: 'Career', url: '/career' },
  { name: 'Gastby', url: '/gatsby' },
  { name: 'Next.js', url: '/nextjs' },
  { name: 'Performance', url: '/performance' },
]

const TopicList = () => {
  return (
    <div>
      <p className="heading-2">Top topics</p>
      <div className="pt-8 text-[13px] font-medium text-gray-1000">
        {dumpData.map((topic) => (
          <TopicButton name={topic.name} url={topic.url} key={topic.name} />
        ))}
      </div>
    </div>
  )
}

export default TopicList
