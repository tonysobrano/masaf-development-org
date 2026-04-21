const homePageQuery = `
  *[_type == "homePage"][0]{
    hero{ tagline, subTaglines, identity, primaryCta{ label, href }, secondaryCta{ label, href } },
    whoWeAre{ eyebrow, heading, body },
    mission{ eyebrow, statement },
    whyMasaf{ eyebrow, heading, points[]{ title, description } },
    impact{ eyebrow, heading, stats[]{ value, label } },
    masafSpacesCallout{ eyebrow, heading, body, cta{ label, href } },
    programmaticFocus{ eyebrow, heading, areas, cta{ label, href } },
    partnerSection{ eyebrow, heading, body, partnershipTypes, cta{ label, href } },
    closing{ line }
  }
`;

const aboutPageQuery = `
  *[_type == "aboutPage"][0]{
    hero{ eyebrow, heading, body },
    founding{ heading, body },
    mission{ heading, statement },
    objectives{ heading, items[]{ title, description } },
    values{ heading, items[]{ title, description } },
    approach{ heading, items[] },
    governance{ heading, body },
    executiveTeam{ heading, body, members[]{ name, role, image, bio } },
    boardOfDirectors{ heading, body, members[]{ name, role, image, bio } }
  }
`;

const masafSpacesPageQuery = `
  *[_type == "masafSpacesPage"][0]{
    hero{ eyebrow, heading, subheading },
    overview{ heading, body },
    whyItMatters{ heading, problem, solution, impact },
    services{ heading, items[]{ title, description } },
    model{ heading, physical{ title, description }, digital{ title, status, description } },
    youthLeadership{ heading, body },
    vision{ heading, body }
  }
`;

const programsPageQuery = `
  *[_type == "programsPage"][0]{
    hero{ eyebrow, heading, body },
    thematicAreas{ heading, items[] }
  }
`;

const programBySlugQuery = `
  *[_type == "program" && slug.current == $slug][0]{
    title,
    slug{ current },
    summary,
    thematicArea->{ title },
    coverImage,
    body
  }
`;

const allProgramSlugsQuery = `
  *[_type == "program" && defined(slug.current)][].slug.current
`;

const postsQuery = `
  *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc){
    slug{ current },
    category,
    title,
    excerpt,
    coverImage,
    publishedAt
  }
`;

const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    slug{ current },
    category,
    excerpt,
    coverImage,
    publishedAt,
    body
  }
`;

const allPostSlugsQuery = `
  *[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))][].slug.current
`;

const eventsQuery = `
  *[_type == "event" && !(_id in path("drafts.**"))] | order(date desc){
    slug{ current },
    title,
    date,
    location,
    excerpt,
    gallery
  }
`;

const resourcesQuery = `
  *[_type == "resource" && !(_id in path("drafts.**"))] | order(_createdAt desc){
    title,
    category,
    description,
    file{ asset->{ url } }
  }
`;

const featuredItemsQuery = `
  {
    "posts": *[_type == "post" && featured == true && !(_id in path("drafts.**"))] | order(publishedAt desc)[0...3]{
      _id,
      _type,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      category
    },
    "events": *[_type == "event" && featured == true && !(_id in path("drafts.**"))] | order(date asc)[0...3]{
      _id,
      _type,
      title,
      "slug": slug.current,
      excerpt,
      date,
      location
    }
  }
`;

const siteSettingsQuery = `
  *[_type == "siteSettings"][0]{
    name,
    shortName,
    url,
    description,
    contact{
      emails{ general, inquiries, somalia },
      phones{ ethiopia[], somalia[] },
      address{ street, city, region, country }
    },
    socials{ facebook, linkedin, instagram, twitter }
  }
`;

export {
  homePageQuery,
  aboutPageQuery,
  masafSpacesPageQuery,
  programsPageQuery,
  programBySlugQuery,
  allProgramSlugsQuery,
  postsQuery,
  postBySlugQuery,
  allPostSlugsQuery,
  eventsQuery,
  resourcesQuery,
  featuredItemsQuery,
  siteSettingsQuery,
};
