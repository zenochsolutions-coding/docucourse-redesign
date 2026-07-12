import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxBg({ image, alt, opacity = 0.2 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={image}
        alt={alt}
        style={{ y, scale, opacity }}
        className="h-full w-full object-cover"
        loading="eager"
      />
    </div>
  )
}
