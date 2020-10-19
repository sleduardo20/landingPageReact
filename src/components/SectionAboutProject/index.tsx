import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { AboutProjectProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutProject = ({ title, image, p01 }: AboutProjectProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.Container>
          <S.Image
            src={getImageUrl(image.url)}
            alt={image.alternativeText}
            loading="lazy"
          />

          <div>
            <Heading>{title}</Heading>
            <S.Text dangerouslySetInnerHTML={{ __html: p01 }} />
          </div>
        </S.Container>
      </Container>
    </S.Wrapper>
  )
}

export default SectionAboutProject
