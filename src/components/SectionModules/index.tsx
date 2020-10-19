import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import * as S from './styles'
import { SectionModulesProps } from 'types/api'

const SectionModules = ({ title, modules }: SectionModulesProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {modules.map((module) => (
        <CardModule
          key={module.id}
          title={module.title}
          subTitle={module.subTitle}
        >
          <div dangerouslySetInnerHTML={{ __html: module.p01 }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
