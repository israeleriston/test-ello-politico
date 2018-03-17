import { http } from '@/plugglables/http'

export const loadAll = () => {
  return http.get('/senador/lista/atual.json')
    .then(req => {
      console.log('req ', req)
      return req.data
    }).catch(e => {
      return Promise.reject(e)
    })
}
