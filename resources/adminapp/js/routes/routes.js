import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'global.dashboard' }
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'cruds.user.title' }
          }
        ]
      },
      {
        path: 'informacion-de-personal',
        name: 'informacion_de_personal',
        component: View,
        redirect: { name: 'departamentos.index' },
        children: [
          {
            path: 'departamentos',
            name: 'departamentos.index',
            component: () => import('@cruds/Departamentos/Index.vue'),
            meta: { title: 'cruds.departamento.title' }
          },
          {
            path: 'departamentos/create',
            name: 'departamentos.create',
            component: () => import('@cruds/Departamentos/Create.vue'),
            meta: { title: 'cruds.departamento.title' }
          },
          {
            path: 'departamentos/:id',
            name: 'departamentos.show',
            component: () => import('@cruds/Departamentos/Show.vue'),
            meta: { title: 'cruds.departamento.title' }
          },
          {
            path: 'departamentos/:id/edit',
            name: 'departamentos.edit',
            component: () => import('@cruds/Departamentos/Edit.vue'),
            meta: { title: 'cruds.departamento.title' }
          },
          {
            path: 'puestos',
            name: 'puestos.index',
            component: () => import('@cruds/Puestos/Index.vue'),
            meta: { title: 'cruds.puesto.title' }
          },
          {
            path: 'puestos/create',
            name: 'puestos.create',
            component: () => import('@cruds/Puestos/Create.vue'),
            meta: { title: 'cruds.puesto.title' }
          },
          {
            path: 'puestos/:id',
            name: 'puestos.show',
            component: () => import('@cruds/Puestos/Show.vue'),
            meta: { title: 'cruds.puesto.title' }
          },
          {
            path: 'puestos/:id/edit',
            name: 'puestos.edit',
            component: () => import('@cruds/Puestos/Edit.vue'),
            meta: { title: 'cruds.puesto.title' }
          },
          {
            path: 'responsables',
            name: 'responsables.index',
            component: () => import('@cruds/Responsables/Index.vue'),
            meta: { title: 'cruds.responsable.title' }
          },
          {
            path: 'responsables/create',
            name: 'responsables.create',
            component: () => import('@cruds/Responsables/Create.vue'),
            meta: { title: 'cruds.responsable.title' }
          },
          {
            path: 'responsables/:id',
            name: 'responsables.show',
            component: () => import('@cruds/Responsables/Show.vue'),
            meta: { title: 'cruds.responsable.title' }
          },
          {
            path: 'responsables/:id/edit',
            name: 'responsables.edit',
            component: () => import('@cruds/Responsables/Edit.vue'),
            meta: { title: 'cruds.responsable.title' }
          }
        ]
      },
      {
        path: 'equipos-de-computo',
        name: 'equipos_de_computo',
        component: View,
        redirect: { name: 'marcas.index' },
        children: [
          {
            path: 'marcas',
            name: 'marcas.index',
            component: () => import('@cruds/Marcas/Index.vue'),
            meta: { title: 'cruds.marca.title' }
          },
          {
            path: 'marcas/create',
            name: 'marcas.create',
            component: () => import('@cruds/Marcas/Create.vue'),
            meta: { title: 'cruds.marca.title' }
          },
          {
            path: 'marcas/:id',
            name: 'marcas.show',
            component: () => import('@cruds/Marcas/Show.vue'),
            meta: { title: 'cruds.marca.title' }
          },
          {
            path: 'marcas/:id/edit',
            name: 'marcas.edit',
            component: () => import('@cruds/Marcas/Edit.vue'),
            meta: { title: 'cruds.marca.title' }
          },
          {
            path: 'procesadores',
            name: 'procesadores.index',
            component: () => import('@cruds/Procesadores/Index.vue'),
            meta: { title: 'cruds.procesadore.title' }
          },
          {
            path: 'procesadores/create',
            name: 'procesadores.create',
            component: () => import('@cruds/Procesadores/Create.vue'),
            meta: { title: 'cruds.procesadore.title' }
          },
          {
            path: 'procesadores/:id',
            name: 'procesadores.show',
            component: () => import('@cruds/Procesadores/Show.vue'),
            meta: { title: 'cruds.procesadore.title' }
          },
          {
            path: 'procesadores/:id/edit',
            name: 'procesadores.edit',
            component: () => import('@cruds/Procesadores/Edit.vue'),
            meta: { title: 'cruds.procesadore.title' }
          },
          {
            path: 'memorias-rams',
            name: 'memorias_rams.index',
            component: () => import('@cruds/MemoriasRams/Index.vue'),
            meta: { title: 'cruds.memoriasRam.title' }
          },
          {
            path: 'memorias-rams/create',
            name: 'memorias_rams.create',
            component: () => import('@cruds/MemoriasRams/Create.vue'),
            meta: { title: 'cruds.memoriasRam.title' }
          },
          {
            path: 'memorias-rams/:id',
            name: 'memorias_rams.show',
            component: () => import('@cruds/MemoriasRams/Show.vue'),
            meta: { title: 'cruds.memoriasRam.title' }
          },
          {
            path: 'memorias-rams/:id/edit',
            name: 'memorias_rams.edit',
            component: () => import('@cruds/MemoriasRams/Edit.vue'),
            meta: { title: 'cruds.memoriasRam.title' }
          },
          {
            path: 'discos-duros',
            name: 'discos_duros.index',
            component: () => import('@cruds/DiscosDuros/Index.vue'),
            meta: { title: 'cruds.discosDuro.title' }
          },
          {
            path: 'discos-duros/create',
            name: 'discos_duros.create',
            component: () => import('@cruds/DiscosDuros/Create.vue'),
            meta: { title: 'cruds.discosDuro.title' }
          },
          {
            path: 'discos-duros/:id',
            name: 'discos_duros.show',
            component: () => import('@cruds/DiscosDuros/Show.vue'),
            meta: { title: 'cruds.discosDuro.title' }
          },
          {
            path: 'discos-duros/:id/edit',
            name: 'discos_duros.edit',
            component: () => import('@cruds/DiscosDuros/Edit.vue'),
            meta: { title: 'cruds.discosDuro.title' }
          },
          {
            path: 'perifericos',
            name: 'perifericos.index',
            component: () => import('@cruds/Perifericos/Index.vue'),
            meta: { title: 'cruds.periferico.title' }
          },
          {
            path: 'perifericos/create',
            name: 'perifericos.create',
            component: () => import('@cruds/Perifericos/Create.vue'),
            meta: { title: 'cruds.periferico.title' }
          },
          {
            path: 'perifericos/:id',
            name: 'perifericos.show',
            component: () => import('@cruds/Perifericos/Show.vue'),
            meta: { title: 'cruds.periferico.title' }
          },
          {
            path: 'perifericos/:id/edit',
            name: 'perifericos.edit',
            component: () => import('@cruds/Perifericos/Edit.vue'),
            meta: { title: 'cruds.periferico.title' }
          },
          {
            path: 'equipos',
            name: 'equipos.index',
            component: () => import('@cruds/Equipos/Index.vue'),
            meta: { title: 'cruds.equipo.title' }
          },
          {
            path: 'equipos/create',
            name: 'equipos.create',
            component: () => import('@cruds/Equipos/Create.vue'),
            meta: { title: 'cruds.equipo.title' }
          },
          {
            path: 'equipos/:id',
            name: 'equipos.show',
            component: () => import('@cruds/Equipos/Show.vue'),
            meta: { title: 'cruds.equipo.title' }
          },
          {
            path: 'equipos/:id/edit',
            name: 'equipos.edit',
            component: () => import('@cruds/Equipos/Edit.vue'),
            meta: { title: 'cruds.equipo.title' }
          }
        ]
      },
      {
        path: 'dispositivos-movile',
        name: 'dispositivos_movile',
        component: View,
        redirect: { name: 'marcas_moviles.index' },
        children: [
          {
            path: 'marcas-moviles',
            name: 'marcas_moviles.index',
            component: () => import('@cruds/MarcasMoviles/Index.vue'),
            meta: { title: 'cruds.marcasMovile.title' }
          },
          {
            path: 'marcas-moviles/create',
            name: 'marcas_moviles.create',
            component: () => import('@cruds/MarcasMoviles/Create.vue'),
            meta: { title: 'cruds.marcasMovile.title' }
          },
          {
            path: 'marcas-moviles/:id',
            name: 'marcas_moviles.show',
            component: () => import('@cruds/MarcasMoviles/Show.vue'),
            meta: { title: 'cruds.marcasMovile.title' }
          },
          {
            path: 'marcas-moviles/:id/edit',
            name: 'marcas_moviles.edit',
            component: () => import('@cruds/MarcasMoviles/Edit.vue'),
            meta: { title: 'cruds.marcasMovile.title' }
          },
          {
            path: 'equipos-moviles',
            name: 'equipos_moviles.index',
            component: () => import('@cruds/EquiposMoviles/Index.vue'),
            meta: { title: 'cruds.equiposMovile.title' }
          },
          {
            path: 'equipos-moviles/create',
            name: 'equipos_moviles.create',
            component: () => import('@cruds/EquiposMoviles/Create.vue'),
            meta: { title: 'cruds.equiposMovile.title' }
          },
          {
            path: 'equipos-moviles/:id',
            name: 'equipos_moviles.show',
            component: () => import('@cruds/EquiposMoviles/Show.vue'),
            meta: { title: 'cruds.equiposMovile.title' }
          },
          {
            path: 'equipos-moviles/:id/edit',
            name: 'equipos_moviles.edit',
            component: () => import('@cruds/EquiposMoviles/Edit.vue'),
            meta: { title: 'cruds.equiposMovile.title' }
          }
        ]
      },
      {
        path: 'lista-de-resguardo',
        name: 'lista_de_resguardo',
        component: View,
        redirect: { name: 'resguardos_pcs.index' },
        children: [
          {
            path: 'resguardos-pcs',
            name: 'resguardos_pcs.index',
            component: () => import('@cruds/ResguardosPcs/Index.vue'),
            meta: { title: 'cruds.resguardosPc.title' }
          },
          {
            path: 'resguardos-pcs/create',
            name: 'resguardos_pcs.create',
            component: () => import('@cruds/ResguardosPcs/Create.vue'),
            meta: { title: 'cruds.resguardosPc.title' }
          },
          {
            path: 'resguardos-pcs/:id',
            name: 'resguardos_pcs.show',
            component: () => import('@cruds/ResguardosPcs/Show.vue'),
            meta: { title: 'cruds.resguardosPc.title' }
          },
          {
            path: 'resguardos-pcs/:id/edit',
            name: 'resguardos_pcs.edit',
            component: () => import('@cruds/ResguardosPcs/Edit.vue'),
            meta: { title: 'cruds.resguardosPc.title' }
          },
          {
            path: 'resguardos-moviles',
            name: 'resguardos_moviles.index',
            component: () => import('@cruds/ResguardosMoviles/Index.vue'),
            meta: { title: 'cruds.resguardosMovile.title' }
          },
          {
            path: 'resguardos-moviles/create',
            name: 'resguardos_moviles.create',
            component: () => import('@cruds/ResguardosMoviles/Create.vue'),
            meta: { title: 'cruds.resguardosMovile.title' }
          },
          {
            path: 'resguardos-moviles/:id',
            name: 'resguardos_moviles.show',
            component: () => import('@cruds/ResguardosMoviles/Show.vue'),
            meta: { title: 'cruds.resguardosMovile.title' }
          },
          {
            path: 'resguardos-moviles/:id/edit',
            name: 'resguardos_moviles.edit',
            component: () => import('@cruds/ResguardosMoviles/Edit.vue'),
            meta: { title: 'cruds.resguardosMovile.title' }
          }
        ]
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})
