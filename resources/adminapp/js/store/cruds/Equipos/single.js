function initialState() {
  return {
    entry: {
      id: null,
      codigo: '',
      owner_id: null,
      tipo: null,
      marca_id: null,
      modelo: '',
      procesador_id: null,
      memoria_ram_id: null,
      disco_duro_id: null,
      periferico: [],
      fotos: [],
      estatus: false,
      nota: '',
      created_at: '',
      updated_at: '',
      deleted_at: ''
    },
    lists: {
      owner: [],
      tipo: [],
      marca: [],
      procesador: [],
      memoria_ram: [],
      disco_duro: [],
      periferico: []
    },
    loading: false
  }
}

const route = 'equipos'

const getters = {
  entry: state => state.entry,
  lists: state => state.lists,
  loading: state => state.loading
}

const actions = {
  storeData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      axios
        .post(route, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  updateData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      params.set('_method', 'PUT')
      axios
        .post(`${route}/${state.entry.id}`, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  setCodigo({ commit }, value) {
    commit('setCodigo', value)
  },
  setOwner({ commit }, value) {
    commit('setOwner', value)
  },
  setTipo({ commit }, value) {
    commit('setTipo', value)
  },
  setMarca({ commit }, value) {
    commit('setMarca', value)
  },
  setModelo({ commit }, value) {
    commit('setModelo', value)
  },
  setProcesador({ commit }, value) {
    commit('setProcesador', value)
  },
  setMemoriaRam({ commit }, value) {
    commit('setMemoriaRam', value)
  },
  setDiscoDuro({ commit }, value) {
    commit('setDiscoDuro', value)
  },
  setPeriferico({ commit }, value) {
    commit('setPeriferico', value)
  },
  insertFotosFile({ commit }, file) {
    commit('insertFotosFile', file)
  },
  removeFotosFile({ commit }, file) {
    commit('removeFotosFile', file)
  },
  setEstatus({ commit }, value) {
    commit('setEstatus', value)
  },
  setNota({ commit }, value) {
    commit('setNota', value)
  },
  setCreatedAt({ commit }, value) {
    commit('setCreatedAt', value)
  },
  setUpdatedAt({ commit }, value) {
    commit('setUpdatedAt', value)
  },
  setDeletedAt({ commit }, value) {
    commit('setDeletedAt', value)
  },
  fetchCreateData({ commit }) {
    axios.get(`${route}/create`).then(response => {
      commit('setLists', response.data.meta)
    })
  },
  fetchEditData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}/edit`).then(response => {
      commit('setEntry', response.data.data)
      commit('setLists', response.data.meta)
    })
  },
  fetchShowData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}`).then(response => {
      commit('setEntry', response.data.data)
    })
  },
  resetState({ commit }) {
    commit('resetState')
  }
}

const mutations = {
  setEntry(state, entry) {
    state.entry = entry
  },
  setCodigo(state, value) {
    state.entry.codigo = value
  },
  setOwner(state, value) {
    state.entry.owner_id = value
  },
  setTipo(state, value) {
    state.entry.tipo = value
  },
  setMarca(state, value) {
    state.entry.marca_id = value
  },
  setModelo(state, value) {
    state.entry.modelo = value
  },
  setProcesador(state, value) {
    state.entry.procesador_id = value
  },
  setMemoriaRam(state, value) {
    state.entry.memoria_ram_id = value
  },
  setDiscoDuro(state, value) {
    state.entry.disco_duro_id = value
  },
  setPeriferico(state, value) {
    state.entry.periferico = value
  },
  insertFotosFile(state, file) {
    state.entry.fotos.push(file)
  },
  removeFotosFile(state, file) {
    state.entry.fotos = state.entry.fotos.filter(item => {
      return item.id !== file.id
    })
  },
  setEstatus(state, value) {
    state.entry.estatus = value
  },
  setNota(state, value) {
    state.entry.nota = value
  },
  setCreatedAt(state, value) {
    state.entry.created_at = value
  },
  setUpdatedAt(state, value) {
    state.entry.updated_at = value
  },
  setDeletedAt(state, value) {
    state.entry.deleted_at = value
  },
  setLists(state, lists) {
    state.lists = lists
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  resetState(state) {
    state = Object.assign(state, initialState())
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}
