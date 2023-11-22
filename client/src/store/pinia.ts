import { defineStore } from 'pinia'

type Producto = {

  readonly id: number,
  nombre: string,
  descripcion: string,
  cantidad: number,
  precio: string,
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
  precio: string

}

type Carrito = {

  readonly id: number,
  img: string,
  nombre: string,
  precio: string,
  unidades: number

}

type Usuario = {

  readonly id: number,
  usuario: string,
  nombre: string,
  foto: string,
  email: string,
  password: string,
  carrito: Carrito []

}

type Pedido = {

  readonly id: number,
  usuario: string,
  productos: Carrito [],
  fecha: string

}

export const useStore = defineStore('storeId', {
  state: () => {

    return {

      listaProductos: [] as Producto [],
      listaCategorias: [] as Categoria [],
      listaServicios: [] as Servicio [],
      listaPedidos: [] as Pedido [],

      listaProductosFiltrar: [] as Producto [],

      informacionUsuario: {} as Usuario,
      carritoUsuario: [] as Carrito [],

      precioTotalCarrito: 0 as number,
      precioTotalCarritoFormateado: "" as string,

      idProductoEliminar: 0 as number,
      informacionPedido: {} as Pedido,

      productoParaVerificar: {

        id: 1,
        nombre: "XXXXX",
        categoria: "XXX",
        descripcion: "XXXXXXXX",
        imagen: "XXXXXX",
        cantidad: 1,
        precio: "1.00"

      } as Producto,

      precioProducto: "" as string,
      codigoVerificacion: "" as string,
      datosUsuarioNuevo: {} as Usuario,
      idUsuario: 0 as number,
      sesionIniciada: false as boolean,
      cargando: false as boolean,

      mensajeExito: true as boolean,
      mensajeError: false as boolean,
      
      mensajeUsuarioCreado: false as boolean

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
      this.precioProducto = res.precio

    },

    async traerCategorias(){

      const peticion = await fetch("http://localhost:8000/api/Categoria/")

      const res = await peticion.json()

      this.listaCategorias = res

    },

    async traerServicios(){

      const peticion = await fetch("http://localhost:8000/get/services/")

      const res = await peticion.json()

      this.listaServicios = res.servicios

    },

    async traerPedidos(){

      const peticion = await fetch(`http://localhost:8000/get/orders/user/${this.informacionUsuario.id}/`)

      const res = await peticion.json()

      this.listaPedidos = res.pedidos

    },

    async traerInformacionUsuario(){

      const peticion = await fetch(`http://localhost:8000/get/info/user/${this.idUsuario}/`)

      const res = await peticion.json()

      this.informacionUsuario = res.usuario

      this.carritoUsuario = res.usuario.carrito.reverse()

      this.precioTotalCarrito = 0

      this.carritoUsuario.forEach(prd => {

        const precioNormal = prd.precio.replace(/[.]/g, '')

        const precioFormateado = parseFloat(precioNormal)

        this.precioTotalCarrito += precioFormateado

      })

      const numero = this.precioTotalCarrito
      const opciones = { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 };
      this.precioTotalCarritoFormateado = numero.toLocaleString('es-ES', opciones);

    }

  }
})