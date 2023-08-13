import Icon from '~/components/elements/Icon'

const dumpPopularPosts = [
  {
    title: 'An Interactive Guide to CSS Transitions',
  },
  {
    title: 'An Interactive Guide to Flexbox',
  },
  {
    title: 'The End of Front-End Development',
  },
  {
    title: 'My Custom CSS Reset',
  },
  {
    title: 'CSS Variables for React Devs',
  },
  {
    title: 'Designing Beautiful Shadows in CSS',
  },
  {
    title: 'How To Learn Stuff Quickly',
  },
  {
    title: 'Why React Re-Renders',
  },
]

const PopularContent = () => {
  return (
    <div>
      <p className="heading-2">Popular content</p>
      <div className="flex flex-col mt-8 -ml-8 space-y-4">
        {dumpPopularPosts.map((post, index) => (
          <div key={index} className="flex items-start space-x-4 group hover:cursor-pointer">
            <div className="min-w-[20px] min-h-[20px] w-5 h-5 translate-y-1 group-hover:translate-x-2 duration-200 group-hover:duration-200">
              <Icon name="smallArrowRight" style="w-full h-full text-primary" />
            </div>
            <p className="font-medium text-gray-1000 leading-[1.45] text-[1.1875rem]">{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularContent
