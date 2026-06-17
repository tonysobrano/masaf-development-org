const postsQuery = `
  *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc){
    slug{ current },
    title,
    excerpt,
    coverImage,
    publishedAt
  }
`;

const postBySlugQuery = `
  *[_type in ["post", "successStories", "opportunities", "event"] && slug.current == $slug][0]{
    _type,
    title,
    slug{ current },
    excerpt,
    coverImage,
    images,
    gallery,
    publishedAt,
    date,
    deadline,
    location,
    type,
    body
  }
`;

const allPostSlugsQuery = `
  *[_type in ["post", "successStories", "opportunities", "event"] && defined(slug.current) && !(_id in path("drafts.**"))][].slug.current
`;

const successStoriesQuery = `
  *[_type == "successStories" && !(_id in path("drafts.**"))] | order(publishedAt desc){
    slug{ current },
    title,
    excerpt,
    coverImage,
    publishedAt
  }
`;

const eventsQuery = `
  *[_type == "event" && !(_id in path("drafts.**"))] | order(date desc){
    slug{ current },
    title,
    date,
    location,
    excerpt,
    coverImage,
    gallery
  }
`;

const resourcesQuery = `
  *[_type == "resource" && !(_id in path("drafts.**"))] | order(_createdAt asc){
    title,
    description,
    status,
    files[]{
      name,
      file{ asset->{ url } },
      viewUrl,
      downloadUrl
    }
  }
`;

const opportunitiesQuery = `
  *[_type == "opportunities" && !(_id in path("drafts.**"))] | order(deadline asc){
    slug{ current },
    title,
    type,
    location,
    excerpt,
    deadline,
    coverImage,
    body
  }
`;

const featuredItemsQuery = `
  *[_type in ["post", "event", "resource", "opportunities", "successStories"] && featured == true && !(_id in path("drafts.**"))] | order(_updatedAt desc)[0...4]{
    _id,
    _type,
    title,
    "slug": slug.current,
    excerpt,
    "date": coalesce(publishedAt, date, deadline),
    coverImage,
    "category": _type
  }
`;

export {
  postsQuery,
  postBySlugQuery,
  allPostSlugsQuery,
  successStoriesQuery,
  eventsQuery,
  resourcesQuery,
  opportunitiesQuery,
  featuredItemsQuery,
};

