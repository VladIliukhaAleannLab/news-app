export const newsLoaded = (payload) => ({type: 'NEWS_LOADED', payload});

export const newsChanged = (data, update, id) => ({type: 'NEWS_CHANGED', data, update, id});

export const newsAdd = (payload) => ({type: 'NEWS_ADD', payload});