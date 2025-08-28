// MUI Components
import { Grid, Typography } from '@mui/material'

// Styles
import theme from '@/styles/Theme'

// Assets
import { Icon } from '@iconify/react/dist/iconify.js'

const Footer = () => {
  return (
    <Grid
      size={12}
      paddingY={2}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={2}
      color={theme.palette.text.primary}
      // sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Icon icon="mdi:copyright" width="20" height="20" />
      <Typography variant="body1" color={theme.palette.text.primary}>
        2025 by Pham Gia Luong. All rights reserved.
      </Typography>
    </Grid>
  )
}

export default Footer
