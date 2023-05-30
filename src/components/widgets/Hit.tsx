const Hit = ({ hit }: { hit: any }) => {
  return (
    <article className="grid grid-cols-2 hover:bg-[#EFEEF7] hover:cursor-pointer">
      <p>{hit.name}</p>
    </article>
  )
}

export default Hit
