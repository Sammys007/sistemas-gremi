<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <event-hub></event-hub>
    <side-bar :sidebarLinks="sidebarLinks">
      <mobile-menu slot="content"></mobile-menu>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <div class="content">
        <dashboard-content></dashboard-content>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardContent from './Content.vue'
import TopNavbar from './TopNavbar.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  components: {
    DashboardContent,
    TopNavbar,
    MobileMenu
  },
  data() {
    return {
      sidebarLinks: [
        {
          title: 'global.dashboard',
          icon: 'dashboard',
          path: { name: 'dashboard' }
        },
        {
          title: 'cruds.userManagement.title',
          icon: 'person',
          path: { name: 'user_management' },
          gate: 'user_management_access',
          children: [
            {
              title: 'cruds.permission.title',
              icon: 'perm_data_setting',
              path: { name: 'permissions.index' },
              gate: 'permission_access'
            },
            {
              title: 'cruds.role.title',
              icon: 'group',
              path: { name: 'roles.index' },
              gate: 'role_access'
            },
            {
              title: 'cruds.user.title',
              icon: 'person',
              path: { name: 'users.index' },
              gate: 'user_access'
            }
          ]
        },
        {
          title: 'cruds.informacionDePersonal.title',
          icon: 'table_view',
          path: { name: 'informacion_de_personal' },
          gate: 'informacion_de_personal_access',
          children: [
            {
              title: 'cruds.departamento.title',
              icon: 'table_view',
              path: { name: 'departamentos.index' },
              gate: 'departamento_access'
            },
            {
              title: 'cruds.puesto.title',
              icon: 'table_view',
              path: { name: 'puestos.index' },
              gate: 'puesto_access'
            },
            {
              title: 'cruds.responsable.title',
              icon: 'table_view',
              path: { name: 'responsables.index' },
              gate: 'responsable_access'
            }
          ]
        },
        {
          title: 'cruds.equiposDeComputo.title',
          icon: 'table_view',
          path: { name: 'equipos_de_computo' },
          gate: 'equipos_de_computo_access',
          children: [
            {
              title: 'cruds.marca.title',
              icon: 'table_view',
              path: { name: 'marcas.index' },
              gate: 'marca_access'
            },
            {
              title: 'cruds.procesadore.title',
              icon: 'table_view',
              path: { name: 'procesadores.index' },
              gate: 'procesadore_access'
            },
            {
              title: 'cruds.memoriasRam.title',
              icon: 'table_view',
              path: { name: 'memorias_rams.index' },
              gate: 'memorias_ram_access'
            },
            {
              title: 'cruds.discosDuro.title',
              icon: 'table_view',
              path: { name: 'discos_duros.index' },
              gate: 'discos_duro_access'
            },
            {
              title: 'cruds.periferico.title',
              icon: 'table_view',
              path: { name: 'perifericos.index' },
              gate: 'periferico_access'
            },
            {
              title: 'cruds.equipo.title',
              icon: 'table_view',
              path: { name: 'equipos.index' },
              gate: 'equipo_access'
            }
          ]
        },
        {
          title: 'cruds.dispositivosMovile.title',
          icon: 'table_view',
          path: { name: 'dispositivos_movile' },
          gate: 'dispositivos_movile_access',
          children: [
            {
              title: 'cruds.marcasMovile.title',
              icon: 'table_view',
              path: { name: 'marcas_moviles.index' },
              gate: 'marcas_movile_access'
            },
            {
              title: 'cruds.equiposMovile.title',
              icon: 'table_view',
              path: { name: 'equipos_moviles.index' },
              gate: 'equipos_movile_access'
            }
          ]
        },
        {
          title: 'cruds.listaDeResguardo.title',
          icon: 'table_view',
          path: { name: 'lista_de_resguardo' },
          gate: 'lista_de_resguardo_access',
          children: [
            {
              title: 'cruds.resguardosPc.title',
              icon: 'table_view',
              path: { name: 'resguardos_pcs.index' },
              gate: 'resguardos_pc_access'
            },
            {
              title: 'cruds.resguardosMovile.title',
              icon: 'table_view',
              path: { name: 'resguardos_moviles.index' },
              gate: 'resguardos_movile_access'
            }
          ]
        }
      ]
    }
  }
}
</script>
