// import axios from 'axios'

export default {
  async TreeList ({ dispatch }) {
    const response = await dispatch('GET', '/api/users/1/trees')
    return response
  },
}
