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
                <strong>{{ $t('cruds.memoriasRam.title_singular') }}</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>{{ $t('cruds.memoriasRam.fields.nombre') }}</label>
                    <div
                      class="form-group bmd-form-group"
                      :class="{
                        'has-items': entry.nombre,
                        'is-focused': activeField == 'nombre'
                      }"
                    >
                      <label class="bmd-label-floating">{{
                        $t('cruds.memoriasRam.fields.nombre_helper')
                      }}</label>
                      <input
                        class="form-control"
                        type="text"
                        :value="entry.nombre"
                        @input="updateNombre"
                        @focus="focusField('nombre')"
                        @blur="clearFocus"
                      />
                    </div>
                  </div>
                  <label class="required">{{
                    $t('cruds.memoriasRam.fields.tipo')
                  }}</label>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.tipo,
                      'is-focused': activeField == 'tipo'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.memoriasRam.fields.tipo_helper')
                    }}</label>
                    <v-select
                      name="tipo"
                      :key="'tipo-field'"
                      :value="entry.tipo"
                      :options="lists.tipo"
                      :reduce="entry => entry.value"
                      @input="updateTipo"
                      @search.focus="focusField('tipo')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.capacidad,
                      'is-focused': activeField == 'capacidad'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.memoriasRam.fields.capacidad')
                    }}</label>
                    <v-select
                      name="capacidad"
                      :key="'capacidad-field'"
                      :value="entry.capacidad"
                      :options="lists.capacidad"
                      :reduce="entry => entry.value"
                      @input="updateCapacidad"
                      @search.focus="focusField('capacidad')"
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
    ...mapGetters('MemoriasRamsSingle', ['entry', 'loading', 'lists'])
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
    ...mapActions('MemoriasRamsSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setNombre',
      'setTipo',
      'setCapacidad'
    ]),
    updateNombre(e) {
      this.setNombre(e.target.value)
    },
    updateTipo(value) {
      this.setTipo(value)
    },
    updateCapacidad(value) {
      this.setCapacidad(value)
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'memorias_rams.index' })
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
