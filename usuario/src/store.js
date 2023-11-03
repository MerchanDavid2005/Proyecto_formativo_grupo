// store.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        carrito: [] // Aquí almacenarás los productos en el carrito
    },
    mutations: {
        agregarProductoAlCarrito(state, producto) {
            state.carrito.push(producto);
        }
    },
    actions: {
        agregarProductoAlCarrito({ commit }, producto) {
            commit('agregarProductoAlCarrito', producto);
        }
    }
});
