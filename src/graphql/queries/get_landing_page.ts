const GET_LANDING_PAGE = /* Graphql */ `
fragment logo on LandingPage {
  logo {
    alternativeText
    url
  }
}

fragment header on LandingPage {
  header {
    title
    description
    button {
      label
      url
    }
    image {
      alternativeText
      url
    }
  }
}

fragment aboutProject on LandingPage {
  sectionAboutProject {
    title
    p01
    image {
      url
      alternativeText
    }
  }
}

fragment sectionTechs on LandingPage {
  sectionTech {
    title
    techIcons {
      id
      icon {
        name
        url
      }
    }
  }
}

fragment sectionConcepts on LandingPage {
  sectionConcepts {
    title
    concepts {
      id
      title
    }
  }
}

fragment setctionModules on LandingPage {
  sectionModules {
    title
    modules {
      id
      title
      subTitle
      p01
    }
  }
}

fragment sectionAgenda_Pricing on LandingPage {
  sectionAgenda {
    title
    description
  }
  pricingBox {
    totalPrice
    numberInstallments
    priceInstallment
    benefits
    button {
      url
    }
  }
}

fragment sectionAboutUS on LandingPage {
  sectionAboutUs {
    title
    authors {
      id
      photo {
        alternativeText
        url
      }
      name
      role
      description
      socialLinks {
        title
        url
      }
    }
  }
}

fragment sectionReviews on LandingPage {
  sectionReviews {
    title
    reviews {
      name
      text
      photo {
        url
        alternativeText
      }
    }
  }
}

fragment sectionFaq on LandingPage {
  sectionFaq {
    title
    questions {
      id
      question
      answer
    }
  }
}

query GET_LANDING_PAGE {
  landingPage {
    ...logo
    ...header
    ...aboutProject
    ...sectionTechs
    ...sectionConcepts
    ...setctionModules
    ...sectionAgenda_Pricing
    ...sectionAboutUS
    ...sectionReviews
    ...sectionFaq
  }
}

`

export default GET_LANDING_PAGE
