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
                <strong>{{ $t('cruds.resguardosPc.title_singular') }}</strong>
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
                      'has-items': entry.folio,
                      'is-focused': activeField == 'folio'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.resguardosPc.fields.folio')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.folio"
                      @input="updateFolio"
                      @focus="focusField('folio')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.fecha,
                      'is-focused': activeField == 'fecha'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.resguardosPc.fields.fecha')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      picker="date"
                      :value="entry.fecha"
                      @input="updateFecha"
                      @focus="focusField('fecha')"
                      @blur="clearFocus"
                      required
                    >
                    </datetime-picker>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.responsable_id !== null,
                      'is-focused': activeField == 'responsable'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.resguardosPc.fields.responsable')
                    }}</label>
                    <v-select
                      name="responsable"
                      label="nombre"
                      :key="'responsable-field'"
                      :value="entry.responsable_id"
                      :options="lists.responsable"
                      :reduce="entry => entry.id"
                      @input="updateResponsable"
                      @search.focus="focusField('responsable')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.equipo_id !== null,
                      'is-focused': activeField == 'equipo'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.resguardosPc.fields.equipo')
                    }}</label>
                    <v-select
                      name="equipo"
                      label="codigo"
                      :key="'equipo-field'"
                      :value="entry.equipo_id"
                      :options="lists.equipo"
                      :reduce="entry => entry.id"
                      @input="updateEquipo"
                      @search.focus="focusField('equipo')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.nota,
                      'is-focused': activeField == 'nota'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.resguardosPc.fields.nota')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.nota"
                      @input="updateNota"
                      @focus="focusField('nota')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div class="form-group">
                    <label>{{ $t('cruds.resguardosPc.fields.pdf') }}</label>
                    <attachment
                      :route="getRoute('resguardos-pcs')"
                      :collection-name="'resguardos_pc_pdf'"
                      :media="entry.pdf"
                      :max-file-size="7"
                      @file-uploaded="insertPdfFile"
                      @file-removed="removePdfFile"
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
import Attachment from '@components/Attachments/Attachment'

export default {
  components: {
    Attachment
  },
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('ResguardosPcsSingle', ['entry', 'loading', 'lists'])
  },
  mounted() {
    this.fetchCreateData()
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('ResguardosPcsSingle', [
      'storeData',
      'resetState',
      'setFolio',
      'setFecha',
      'setResponsable',
      'setEquipo',
      'setNota',
      'insertPdfFile',
      'removePdfFile',
      'fetchCreateData'
    ]),
    updateFolio(e) {
      this.setFolio(e.target.value)
    },
    updateFecha(e) {
      this.setFecha(e.target.value)
    },
    updateResponsable(value) {
      this.setResponsable(value)
    },
    updateEquipo(value) {
      this.setEquipo(value)
    },
    updateNota(e) {
      this.setNota(e.target.value)
    },
    getRoute(name) {
      return `${axios.defaults.baseURL}${name}/media`
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'resguardos_pcs.index' })
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
