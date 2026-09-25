import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export default function StatItem({ value, suffix = '', label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const shouldReduceMotion = useReducedMotion()

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 1500, bounce: 0 })
  const displayRef = useRef(null)

  useEffect(() => {
    if (isInView) {
      motionValue.set(shouldReduceMotion ? value : value)
    }
  }, [isInView, value, motionValue, shouldReduceMotion])

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = Math.round(latest) + suffix
      }
    })
  }, [springValue, suffix])

  return (
    <div ref={ref} className="text-center">
      <span
        ref={displayRef}
        className="block font-display text-4xl font-bold text-off-white"
      >
        0{suffix}
      </span>
      <p className="mt-1 text-sm text-secondary-text">{label}</p>
    </div>
  )
}
