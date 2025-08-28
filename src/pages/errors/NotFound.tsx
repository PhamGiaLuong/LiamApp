import BodyBox from '@/components/BodyBox'
import theme from '@/styles/Theme'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const { t } = useTranslation()
  return (
    <BodyBox>
      <Typography
        variant="h1"
        color={theme.palette.error.main}
        textAlign={'center'}
      >
        {t('Errors:NotFound:title')}
      </Typography>
      <Typography variant="body1" textAlign={'center'}>
        {t('Errors:NotFound:description')}
      </Typography>
    </BodyBox>
  )
}

export default NotFound
