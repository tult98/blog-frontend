import { useEffect, useRef, useState } from 'react'

const useInterSecting = () => {
  const htmlRef = useRef<HTMLElement>(null)
  const [observer, setObserver] = useState<IntersectionObserver | null>(null)
  const [isInterSecting, setIsInterSecting] = useState<boolean>(false)

  useEffect(() => {
    if (!htmlRef.current) {
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
  }, [htmlRef])

  useEffect(() => {
    if (!observer) {
      return
    }
    observer.observe(htmlRef.current!)
  }, [observer])

  return { htmlRef, isInterSecting }
}

export default useInterSecting
