import { defineStore } from 'pinia'

type Producto = {

  readonly id: number,
  nombre: string,
  descripcion: string,
  cantidad: number,
  precio: number,
  imagen: string,
  categoria: string

}

type Categoria = {

  readonly id: number,
  nombre: string

}

type Servicio = {

  readonly id: number,
  nombre: string,
  imagen: string,
  descripcion: string,
  precio: number

}

export const useStore = defineStore('storeId', {
  state: () => {

    return {

      listaProductos: [] as Producto [],
      listaCategorias: [] as Categoria [],
      listaServicios: [] as Servicio []

    }

  },
  actions:{

    async traerProductos(){

      const peticion = await fetch("http://localhost:8000/get/products/")

      const res = await peticion.json()

      this.listaProductos = res.productos

    },

    async traerCategorias(){

      const peticion = await fetch("http://localhost:8000/api/Categoria/")

      const res = await peticion.json()

      this.listaCategorias = res

    },

    async traerServicios(){

      const peticion = await fetch("http://localhost:8000/api/Servicio/")

      const res = await peticion.json()

      this.listaServicios = res

    },

  }
})