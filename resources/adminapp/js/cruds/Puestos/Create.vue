<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">add</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.create') }}
                <strong>{{ $t('cruds.puesto.title_singular') }}</strong>
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
                      $t('cruds.puesto.fields.nombre')
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
                      'has-items': entry.departamento_id !== null,
                      'is-focused': activeField == 'departamento'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.puesto.fields.departamento')
                    }}</label>
                    <v-select
                      name="departamento"
                      label="nombre"
                      :key="'departamento-field'"
                      :value="entry.departamento_id"
                      :options="lists.departamento"
                      :reduce="entry => entry.id"
                      @input="updateDepartamento"
                      @search.focus="focusField('departamento')"
                      @search.blur="clearFocus"
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
    ...mapGetters('PuestosSingle', ['entry', 'loading', 'lists'])
  },
  mounted() {
    this.fetchCreateData()
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('PuestosSingle', [
      'storeData',
      'resetState',
      'setNombre',
      'setDepartamento',
      'fetchCreateData'
    ]),
    updateNombre(e) {
      this.setNombre(e.target.value)
    },
    updateDepartamento(value) {
      this.setDepartamento(value)
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'puestos.index' })
          this.$eventHub.$emit('create-success')
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
