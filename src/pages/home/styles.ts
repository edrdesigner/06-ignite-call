import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  gap: '$20',
})

export const Hero = styled('div', {
  maxWidth: 500,
  padding: '0 $10',

  [`> ${Heading}`]: {
    color: '$gray100',
    '@media (max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  padding: '$8',
  overflow: 'hidden',

  '@media (max-width: 600px)': {
    display: 'none',
  },
})
