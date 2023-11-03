import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {

  state: () => {

    return {

      modoEspera: false,
      success: false,
      error: false,

      listaCategorias: [],
      listaProductos: [],
      listaUsuarios: [],
      listaServicios: [],
      listaPedidos: [],

      listaCategoriasFilter: [],
      listaProductosFilter: [],
      listaUsuariosFilter: [],
      listaServiciosFilter: [],

      idEliminar: 0,
      informacionUsuario: {

        "usuario": "Anonimo",
        "foto": "https://i.pinimg.com/736x/06/ba/5f/06ba5fde85a79607e31fe26db9545c95.jpg"

      },
      
    }

  },

  actions:{

    async getCategorys(){

      const data = await fetch("http://127.0.0.1:8000/api/Categoria/")
      const info = await data.json()
      this.listaCategorias = info
      this.listaCategoriasFilter = this.listaCategorias.reverse()
    
    },
    
    async getProducts(){
    
      const data = await fetch("http://127.0.0.1:8000/get/products/")
      const info = await data.json()
      this.listaProductos = info.productos
      this.listaProductosFilter = this.listaProductos.reverse()
    
    },
    
    async getServices(){
    
      const data = await fetch("http://127.0.0.1:8000/api/Servicio/")
      const info = await data.json()
      this.listaServicios = info
      this.listaServiciosFilter = this.listaServicios.reverse()
    
    },
    
    async getUsers(){
    
      const data = await fetch("http://127.0.0.1:8000/api/Usuario/")
      const info = await data.json()
      this.listaUsuarios = info
      this.listaUsuariosFilter = this.listaUsuarios.reverse()
    
    },
    
    async getOrders(){
    
      const data = await fetch("http://127.0.0.1:8000/api/Pedido/")
      const info = await data.json()
      this.listaPedidos = info
    
    },

    async getInfoUser(id){

      const data = await fetch(`http://127.0.0.1:8000/api/Usuario/${id}/`)
      const info = await data.json()
      this.informacionUsuario = info

    },

    async eliminarImagen(modelo){

      const peticionImagen = await fetch(`http://localhost:8000/delete/img/${this.idEliminar}/${modelo}/`)

      return peticionImagen

    },

    async eliminarRegistro(modelo){

      this.modoEspera = true

      try{

        await this.eliminarImagen(modelo)
        const peticion = await fetch(`http://localhost:8000/api/${modelo}/${this.idEliminar}/`, {

          method: 'DELETE',
          headers: {"content-type": "application/json"}

        });

        return peticion

      }catch(e){

        alert("Ha habido un error")
        this.modoEspera = false

      }

    }

  }

})