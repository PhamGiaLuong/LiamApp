// React Router Configuration
import { Outlet } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'

// MUI Components
import { Box } from '@mui/material'

// Custom Components
// import Header from '@/components/Header'
// import Footer from '@/components/Footer'

export default function MainLayout() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)

      const handleResize = () => {
        if (headerRef.current) {
          setHeaderHeight(headerRef.current.offsetHeight)
        }
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box
        ref={headerRef}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1000,
          backgroundColor: 'white',
          boxShadow: '0 2px 8px #578FCA',
          width: '100vw',
        }}
      >
        {/* <Header /> */}
      </Box>
      <Box sx={{ flexGrow: 1, paddingTop: `${headerHeight}px` }}>
        <Outlet context={{ headerHeight }} />
      </Box>
      {/* <Footer /> */}
    </div>
  )
}
