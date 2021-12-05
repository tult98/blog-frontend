import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import avatar from '../../../../../public/avatar.jpg'

const AboutMe = () => {
  const aboutMeRef = useRef<HTMLElement>(null)
  const [observer, setObserver] = useState<IntersectionObserver | null>(null)
  const [isInterSecting, setIsInterSecting] = useState<boolean>(false)

  useEffect(() => {
    if (!aboutMeRef.current) {
      return
    }
    setObserver(
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInterSecting(true)
          }
        })
      }),
    )
  }, [aboutMeRef])

  useEffect(() => {
    if (!observer) {
      return
    }
    observer.observe(aboutMeRef.current!)
  }, [observer])

  return (
    <section
      id="about"
      className={`md:mt-24 mt-10 opacity-0 ${
        isInterSecting ? 'animate-fadeInFromBottomSlow animation-delay-200' : ''
      }`}
      ref={aboutMeRef}
    >
      <div className="flex flex-row items-center mt-3 mb-10">
        <h2 className="text-2xl font-semibold md:text-3xl text-slate-lightest">
          <span className="mr-2 text-lg font-normal text-green font-sfmono">
            01.
          </span>{' '}
          About Me
        </h2>
        <div className="relative w-20 h-px ml-5 md:w-52 bg-navy-lightest -top-1"></div>
      </div>
      <div className="gap-4 md:grid md:grid-cols-2">
        <div>
          <p className="mb-4 text-xl text-slate">
            Hello! My name is Tu and I enjoy creating things that live on the
            internet. At the first, I thought of the web development world only
            around simple things like HTML, CSS, but turns out it is not.
          </p>
          <p className="mb-4 text-xl text-slate">
            Pass over last year, I&#39;ve had the privilege of working with a{' '}
            <a
              className="text-green hover:underline hover:cursor-pointer"
              target="_blank"
              href="https://nearme.jp/en_us/"
            >
              start-up
            </a>{' '}
            that requires high quality in many perspectives like UI,
            performance, re-usability which is helping me gain a lot from
            technical to communicate with customers directly.
          </p>
          <p className="mb-4 text-xl text-slate">
            My main focus these days is applying the knowledge that I&#39;ve
            learned to my projects, keep learning, and improve myself so that I
            can be a better developer who always looks forward.
          </p>
          <p className="mb-4 text-xl text-slate">
            Here are a few technologies I&#39;ve been working with recently:
          </p>
          <ul className="relative grid grid-cols-2 mt-5 text-slate">
            <li className="flex flex-row items-center pl-4 mb-2 skill-item">
              JavaScript (ES6+)
            </li>
            <li className="flex flex-row items-center pl-4 mb-2 skill-item">
              Typescript
            </li>
            <li className="flex flex-row items-center pl-4 mb-2 skill-item">
              React
            </li>
            <li className="flex flex-row items-center pl-4 mb-2 skill-item">
              Graphql
            </li>
            <li className="flex flex-row items-center pl-4 mb-2 skill-item">
              NextJS
            </li>
            <li className="flex flex-row items-center pl-4 mb-2 skill-item">
              NodeJS
            </li>
          </ul>
        </div>
        <div className="items-center justify-center hidden w-full h-full md:flex md:flex-row">
          <Image
            src={avatar}
            alt="avatar"
            className="object-cover rounded-full"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
