const TopicButton = ({ name }: { name: string }) => {
  return (
    <div className="py-[3px] px-3  bg-decorative/[.33] rounded-lg mr-2 mb-2 inline-block scale-[0.99] hover:bg-decorative/50 hover:scale-[1.06] hover:cursor-pointer">
      {name}
    </div>
  )
}

export default TopicButton
