import { Container, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import NavBar from './navBar/navBar'
import SEO from './seo'

type Props = {
  title: string
  description?: string
  image?: string
  children: React.ReactNode
}

export default function Layout({ title, description, image, children }: Props) {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={t(title)} description={description} image={image} />
      <NavBar />
      <Container maxW="1024px">
        <Heading marginY="24px">{t(title)}</Heading>
        {children}
      </Container>
      <Container centerContent>
        <HStack aria-label="Copyright">
          <Text fontSize="md">
            {'Copyright © '}
            <a href="mailto:sboh1214@gmail.com" target="_top">
              Seungbin Oh
            </a>
            {'. Inspired by '}
            <a href="https://github.com/sungik-choi/gatsby-starter-apple" target="__blank">
              'gatsby-starter-apple'
            </a>
          </Text>
        </HStack>
      </Container>
    </>
  )
}
