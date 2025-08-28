import theme from '@/styles/Theme'
import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material'

interface BodyBoxProps {
  children: React.ReactNode
  sx?: SxProps<Theme>
}

const BodyBox: React.FC<BodyBoxProps> = ({ children, sx }) => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: 'white',
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export default BodyBox
