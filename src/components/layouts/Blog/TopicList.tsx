import TopicButton from '~/components/elements/TopicButton'

const TopicList = ({ topics }: { topics: string[] }) => {
  return (
    <div>
      <p className="heading-2">Top topics</p>
      <div className="pt-8 text-[13px] font-medium text-gray-1000">
        {topics.map((topic, index) => (
          <TopicButton name={topic} key={index} />
        ))}
      </div>
    </div>
  )
}

export default TopicList
