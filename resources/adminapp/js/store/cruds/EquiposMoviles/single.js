function initialState() {
  return {
    entry: {
      id: null,
      codigo: '',
      marca_id: null,
      modelo: '',
      numero_de_serie: '',
      imei: '',
      perifericos: null,
      nota: '',
      estatus: true,
      created_at: '',
      updated_at: '',
      deleted_at: '',
      owner_id: null
    },
    lists: {
      marca: [],
      perifericos: [],
      owner: []
    },
    loading: false
  }
}

const route = 'equipos-moviles'

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
  setMarca({ commit }, value) {
    commit('setMarca', value)
  },
  setModelo({ commit }, value) {
    commit('setModelo', value)
  },
  setNumeroDeSerie({ commit }, value) {
    commit('setNumeroDeSerie', value)
  },
  setImei({ commit }, value) {
    commit('setImei', value)
  },
  setPerifericos({ commit }, value) {
    commit('setPerifericos', value)
  },
  setNota({ commit }, value) {
    commit('setNota', value)
  },
  setEstatus({ commit }, value) {
    commit('setEstatus', value)
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
  setOwner({ commit }, value) {
    commit('setOwner', value)
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
  setMarca(state, value) {
    state.entry.marca_id = value
  },
  setModelo(state, value) {
    state.entry.modelo = value
  },
  setNumeroDeSerie(state, value) {
    state.entry.numero_de_serie = value
  },
  setImei(state, value) {
    state.entry.imei = value
  },
  setPerifericos(state, value) {
    state.entry.perifericos = value
  },
  setNota(state, value) {
    state.entry.nota = value
  },
  setEstatus(state, value) {
    state.entry.estatus = value
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
  setOwner(state, value) {
    state.entry.owner_id = value
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
