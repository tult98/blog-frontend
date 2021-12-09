import useInterSecting from '~/hooks/useInterSecting'

const Experience = ({ isInView }: { isInView: boolean }) => {
  const { htmlRef: experienceRef, isInterSecting } = useInterSecting()
  const companies = [{ name: 'Rikkeisoft', isActive: true }]

  if (isInView) {
    experienceRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  return (
    <section
      ref={experienceRef}
      className={`items-center min-h-screen pt-24 mx-auto max-w-700px opacity-0 ${
        isInterSecting ? 'animate-fadeInFromBottomSlow animation-delay-200' : ''
      }`}
    >
      <div className="flex flex-row items-center">
        <h1 className="mt-2 mb-10 text-3xl font-semibold text-slate-lightest">
          <span className="text-lg font-normal text-green font-sfmono">
            02.
          </span>{' '}
          Where I&#39;ve Worked
        </h1>
        <div className="relative w-20 h-px ml-5 md:w-52 bg-navy-lightest -top-5"></div>
      </div>
      <div className="flex flex-col w-full md:flex-row text-slate-light">
        <div className="md:w-3/12 font-sfmono h-11">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`flex flex-row items-center md:border-l-2 md:border-b-0 border-b-2 w-32 px-5 py-4 text-xs cursor-pointer h-11 hover:bg-navy-lightest hover:text-green ${
                company.isActive
                  ? 'bg-navy-lightest text-green border-green'
                  : 'border-navy-lightest'
              }`}
            >
              {company.name}
            </div>
          ))}
        </div>
        <div className="w-9/12 px-1 py-2 mt-10 font-sfmono md:mt-0">
          <h1 className="text-2xl font-semibold text-slate-lightest font-calibre">
            Frontend Developer
          </h1>
          <p className="mb-6 text-xs">August 2020 - Present</p>
          <p className="mb-2 text-lg font-calibre skill-item">
            Maintain, implement the new features as well as refactor existing
            code to improve re-usability and performance.
          </p>
          <p className="mb-2 text-lg font-calibre skill-item">
            Working with different frameworks, platforms such as JavaScript,
            Typescript, ReactJS, NextJS, NodeJS, GraphQL, ... etc.
          </p>
          <p className="text-lg font-calibre skill-item">
            Communicate with customers like engineers, Product manager or CTO to
            clarify the problems and solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience
