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

type Carrito = {

  readonly id: number,
  img: string,
  nombre: string,
  precio: number,
  unidades: number

}

type Usuario = {

  readonly id: number,
  nombre: string,
  foto: string,
  email: string,
  carrito: Carrito []

}

export const useStore = defineStore('storeId', {
  state: () => {

    return {

      listaProductos: [] as Producto [],
      listaCategorias: [] as Categoria [],
      listaServicios: [] as Servicio [],

      listaProductosFiltrar: [] as Producto [],

      informacionUsuario: {} as Usuario,
      carritoUsuario: [] as Carrito [],

      precioTotalCarrito: 0 as number,

      idProductoEliminar: 0 as number,

      productoParaVerificar: {

        id: 1,
        nombre: "XXXXX",
        categoria: "XXX",
        descripcion: "XXXXXXXX",
        imagen: "XXXXXX",
        cantidad: 1,
        precio: 1

      } as Producto,

    }

  },

  actions:{

    async traerProductos(){

      const peticion = await fetch("http://localhost:8000/get/products/")

      const res = await peticion.json()

      this.listaProductos = res.productos.reverse()
      this.listaProductosFiltrar = this.listaProductos

    },

    async traerProductoPorId(id: number){

      const peticion = await fetch(`http://localhost:8000/get/product/id/${id}/`)

      const res = await peticion.json()

      this.productoParaVerificar = res

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

    async traerInformacionUsuario(){

      const peticion = await fetch("http://localhost:8000/get/info/user/1/")

      const res = await peticion.json()

      this.informacionUsuario = res.usuario

      this.carritoUsuario = res.usuario.carrito

    }

  }
})