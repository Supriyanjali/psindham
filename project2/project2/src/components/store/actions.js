import axios from 'axios'
export const getProducts = ({ commit }) => {
  axios.get('https://fakestoreapi.com/products')
    .then(response => {
      commit('SET_PRODUCTS', response.data)
    })
}
