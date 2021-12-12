import useInterSecting from '~/hooks/useInterSecting'
import WorkItem from './WorkItem'

const Work = ({ isInView }: { isInView: boolean }) => {
  const works = [
    {
      title: 'Tracking price system for Tiki products',
      description:
        'A website allows user to watching their favorite products and get notified by email if product price is reducing.',
      tags: ['reactjs', 'django', 'firebase'],
      githubURL: 'https://github.com/lethanhtupk/gtd-frontend',
      deployURL: 'https://get-the-deal.web.app/',
    },
    {
      title: 'Uploading products with woocommerce API',
      description:
        "Speed up uploading product process by using woo API and managing user's template",
      tags: ['reactjs', 'django', 'firebase'],
      githubURL: 'https://github.com/lethanhtupk/product_uploader_frontend',
      deployURL: 'https://product-uploader-2f031.web.app/',
    },
    {
      title: 'React application boilerplate',
      description:
        'A boilerplate for ReactJS project setup with full of modern development tools',
      tags: ['reactjs', 'typescript', 'webpack', 'eslint'],
      githubURL: 'https://github.com/lethanhtupk/react-application-boilerplate',
    },
  ]
  const { htmlRef: workRef, isInterSecting } = useInterSecting()

  if (isInView) {
    workRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section
      className={`pt-24 items-center min-h-screen max-w-1000px opacity-0 mx-auto ${
        isInterSecting ? 'animate-fadeInFromBottomSlow animation-delay-200' : ''
      }`}
      ref={workRef}
    >
      <div className="flex flex-row items-center">
        <h1 className="md:text-3xl text-2xl text-slate-lightest font-semibold mt-2 mb-10">
          <span className="text-green font-sfmono text-lg font-normal">
            03.{' '}
          </span>{' '}
          Some things I&#39;ve built
        </h1>
        <div className="relative w-20 h-px ml-5 md:w-52 bg-navy-lightest -top-5"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
        {works.map((work, idx) => (
          <WorkItem
            key={idx}
            title={work.title}
            description={work.description}
            tags={work.tags}
            githubURL={work.githubURL}
            deployURL={work.deployURL}
          />
        ))}
      </div>
    </section>
  )
}

export default Work
