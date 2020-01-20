import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kitsu.io/api/edge/'
})

export const get = (search, offset, path = null) => {
  return new Promise((resolve, reject) => {
    let url = path || `characters?page[limit]=10&page[offset]=${offset}`;
    if (search && search.length > 0)
      url = url + `&filter[name]=${search}`;
    api.get(url)
      .then(result => {
        resolve(result.data);
      })
  })
}

export const getById = (id) => {
  if (!id) return;
  return new Promise((resolve, reject) => {
    api.get(`characters/${id}`)
      .then(result => {
        resolve(result.data);
      })
  })
}

export const getMedias = (path) => {
  const data = [];
  return new Promise((resolve, reject) => {
    api.get(path).then(result => {
      const relatedMedias = result.data.data;
      relatedMedias.forEach(rm => {
        api.get(rm.relationships.media.links.related).then(result2 => {
          const media = result2.data.data;
          data.push({
            id: media.id,
            type: media.type,
            title: media.attributes.titles.en || media.attributes.canonicalTitle,
            otherNames: media.attributes.otherNames,
            posterImage: media.attributes.posterImage.small || media.attributes.posterImage.original
          })
          if (data.length === relatedMedias.length)
            resolve(data);
        })
      });
    })
  });
}

// export default { get, getById };