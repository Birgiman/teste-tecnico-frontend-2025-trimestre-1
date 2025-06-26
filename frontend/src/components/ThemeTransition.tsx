import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ThemeTransiction({ trigger }: {trigger: boolean}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (trigger) {
      setVisible(true)
      const timeout = setTimeout(() => setVisible(false), 700)
      return () => clearTimeout(timeout)
    }
  }, [trigger])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: '-100%', skewX: '-15deg' }}
          animate={{ x: '120%', skewX: '-15deg' }}
          exit={{ opacity: 10 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='fixed inset-0 z-50 bg-base pointer-events-none'
          style={{
            transformOrigin: 'left',
          }}
        />
      )}
    </AnimatePresence>
  )

}
