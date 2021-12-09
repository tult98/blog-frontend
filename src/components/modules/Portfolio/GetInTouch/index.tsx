import useInterSecting from '~/hooks/useInterSecting'

const GetInTouch = ({ isInView }: { isInView: boolean }) => {
  const { htmlRef: getInTouchRef, isInterSecting } = useInterSecting()

  if (isInView) {
    getInTouchRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  return (
    <section
      ref={getInTouchRef}
      className={`flex flex-col items-center justify-center min-h-screen py-24 mx-auto opacity-0 font-calibre max-w-600px ${
        isInterSecting ? 'animate-fadeInFromBottomSlow animation-delay-200' : ''
      }`}
    >
      <p className="mb-5 text-green font-sfmono">04. What&#39;s next?</p>
      <h1 className="mb-3 text-5xl font-semibold capitalize text-slate-lightest">
        Get in touch
      </h1>
      <p className="text-xl text-center text-slate-light">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <button className="mt-12 capitalize styled-btn">Say hello</button>
    </section>
  )
}

export default GetInTouch
