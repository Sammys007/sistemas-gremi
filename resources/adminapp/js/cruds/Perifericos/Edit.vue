<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">edit</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.edit') }}
                <strong>{{ $t('cruds.periferico.title_singular') }}</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.nombre,
                      'is-focused': activeField == 'nombre'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.periferico.fields.nombre')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.nombre"
                      @input="updateNombre"
                      @focus="focusField('nombre')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.marca,
                      'is-focused': activeField == 'marca'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.periferico.fields.marca')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.marca"
                      @input="updateMarca"
                      @focus="focusField('marca')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.modelo,
                      'is-focused': activeField == 'modelo'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.periferico.fields.modelo')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.modelo"
                      @input="updateModelo"
                      @focus="focusField('modelo')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.no_de_serie,
                      'is-focused': activeField == 'no_de_serie'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.periferico.fields.no_de_serie')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.no_de_serie"
                      @input="updateNoDeSerie"
                      @focus="focusField('no_de_serie')"
                      @blur="clearFocus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-primary"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                {{ $t('global.save') }}
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('PerifericosSingle', ['entry', 'loading'])
  },
  beforeDestroy() {
    this.resetState()
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchEditData(this.$route.params.id)
      }
    }
  },
  methods: {
    ...mapActions('PerifericosSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setNombre',
      'setMarca',
      'setModelo',
      'setNoDeSerie'
    ]),
    updateNombre(e) {
      this.setNombre(e.target.value)
    },
    updateMarca(e) {
      this.setMarca(e.target.value)
    },
    updateModelo(e) {
      this.setModelo(e.target.value)
    },
    updateNoDeSerie(e) {
      this.setNoDeSerie(e.target.value)
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'perifericos.index' })
          this.$eventHub.$emit('update-success')
        })
        .catch(error => {
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>
