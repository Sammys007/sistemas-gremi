import Vue from 'vue'
import Vuex from 'vuex'

import Alert from './modules/alert'
import I18NStore from './modules/i18n'

import PermissionsIndex from './cruds/Permissions'
import PermissionsSingle from './cruds/Permissions/single'
import RolesIndex from './cruds/Roles'
import RolesSingle from './cruds/Roles/single'
import UsersIndex from './cruds/Users'
import UsersSingle from './cruds/Users/single'
import MarcasIndex from './cruds/Marcas'
import MarcasSingle from './cruds/Marcas/single'
import ProcesadoresIndex from './cruds/Procesadores'
import ProcesadoresSingle from './cruds/Procesadores/single'
import MemoriasRamsIndex from './cruds/MemoriasRams'
import MemoriasRamsSingle from './cruds/MemoriasRams/single'
import DiscosDurosIndex from './cruds/DiscosDuros'
import DiscosDurosSingle from './cruds/DiscosDuros/single'
import PerifericosIndex from './cruds/Perifericos'
import PerifericosSingle from './cruds/Perifericos/single'
import EquiposIndex from './cruds/Equipos'
import EquiposSingle from './cruds/Equipos/single'
import DepartamentosIndex from './cruds/Departamentos'
import DepartamentosSingle from './cruds/Departamentos/single'
import PuestosIndex from './cruds/Puestos'
import PuestosSingle from './cruds/Puestos/single'
import ResponsablesIndex from './cruds/Responsables'
import ResponsablesSingle from './cruds/Responsables/single'
import ResguardosPcsIndex from './cruds/ResguardosPcs'
import ResguardosPcsSingle from './cruds/ResguardosPcs/single'
import MarcasMovilesIndex from './cruds/MarcasMoviles'
import MarcasMovilesSingle from './cruds/MarcasMoviles/single'
import EquiposMovilesIndex from './cruds/EquiposMoviles'
import EquiposMovilesSingle from './cruds/EquiposMoviles/single'
import ResguardosMovilesIndex from './cruds/ResguardosMoviles'
import ResguardosMovilesSingle from './cruds/ResguardosMoviles/single'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Alert,
    I18NStore,
    PermissionsIndex,
    PermissionsSingle,
    RolesIndex,
    RolesSingle,
    UsersIndex,
    UsersSingle,
    MarcasIndex,
    MarcasSingle,
    ProcesadoresIndex,
    ProcesadoresSingle,
    MemoriasRamsIndex,
    MemoriasRamsSingle,
    DiscosDurosIndex,
    DiscosDurosSingle,
    PerifericosIndex,
    PerifericosSingle,
    EquiposIndex,
    EquiposSingle,
    DepartamentosIndex,
    DepartamentosSingle,
    PuestosIndex,
    PuestosSingle,
    ResponsablesIndex,
    ResponsablesSingle,
    ResguardosPcsIndex,
    ResguardosPcsSingle,
    MarcasMovilesIndex,
    MarcasMovilesSingle,
    EquiposMovilesIndex,
    EquiposMovilesSingle,
    ResguardosMovilesIndex,
    ResguardosMovilesSingle
  },
  strict: debug
})
