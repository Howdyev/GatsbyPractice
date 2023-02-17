import { useEffect, useState } from 'react'

function useWindowScrollDirection () {
  const [windowScrollDirection, setWindowScrollDirection] = useState({
    y: typeof window === 'object' ? window.pageYOffset : 0,
    isUp: true
  })

  useEffect(() => {
    const handleScroll = () => {
        console.log("hello");
      setWindowScrollDirection(prev => ({
        y: window.pageYOffset,
        isUp: prev.y > window.pageYOffset
      }))
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return windowScrollDirection
}

export default useWindowScrollDirection