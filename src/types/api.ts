export type LogoProps = {
  alternativeText: string
  url: string
}

export type TechIcon = {
  id: string
  title: string
  icon: {
    url: string
  }
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type AboutProjectProps = {
  title: string
  p01: string
  image: {
    url: string
    alternativeText: string
  }
}

export type SectionTechsProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: [
    {
      id: string
      title: string
    }
  ]
}

export type SectionModulesProps = {
  title: string
  modules: [
    {
      id: string
      title: string
      subTitle: string
      p01: string
    }
  ]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    url: string
  }
}
export type SocialLinkProps = {
  title: string
  url: string
}
export type AuthorProps = {
  photo: {
    alternativeText: string
    url: string
  }
  name: string
  role: string
  description: string
  // socialLinks?: SocialLinkProps[]
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorProps[]
}

export type ReviewsProp = {
  name: string
  text: string
  photo: {
    url: string
    alternativeText: string
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewsProp[]
}

export type QuestionProps = {
  id: string
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: QuestionProps[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
  sectionTech: SectionTechsProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
