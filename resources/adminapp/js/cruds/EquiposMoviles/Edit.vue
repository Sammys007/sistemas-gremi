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
                <strong>{{ $t('cruds.equiposMovile.title_singular') }}</strong>
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
                      'has-items': entry.codigo,
                      'is-focused': activeField == 'codigo'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.equiposMovile.fields.codigo')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.codigo"
                      @input="updateCodigo"
                      @focus="focusField('codigo')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.marca_id !== null,
                      'is-focused': activeField == 'marca'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.equiposMovile.fields.marca')
                    }}</label>
                    <v-select
                      name="marca"
                      label="nombre"
                      :key="'marca-field'"
                      :value="entry.marca_id"
                      :options="lists.marca"
                      :reduce="entry => entry.id"
                      @input="updateMarca"
                      @search.focus="focusField('marca')"
                      @search.blur="clearFocus"
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
                      $t('cruds.equiposMovile.fields.modelo')
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
                      'has-items': entry.numero_de_serie,
                      'is-focused': activeField == 'numero_de_serie'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.equiposMovile.fields.numero_de_serie')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.numero_de_serie"
                      @input="updateNumeroDeSerie"
                      @focus="focusField('numero_de_serie')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.imei,
                      'is-focused': activeField == 'imei'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.equiposMovile.fields.imei')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.imei"
                      @input="updateImei"
                      @focus="focusField('imei')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div class="form-group">
                    <label>{{
                      $t('cruds.equiposMovile.fields.perifericos')
                    }}</label>
                    <v-radio
                      :value="entry.perifericos"
                      :options="lists.perifericos"
                      @change="updatePerifericos"
                    >
                    </v-radio>
                  </div>
                  <div class="form-group">
                    <label>{{ $t('cruds.equiposMovile.fields.nota') }}</label>
                    <ckeditor
                      :editor="editor"
                      :value="entry.nota"
                      @input="updateNota"
                    >
                    </ckeditor>
                  </div>
                  <div class="form-group bmd-form-group form-check has-items">
                    <label class="bmd-label-floating">{{
                      $t('cruds.equiposMovile.fields.estatus_helper')
                    }}</label>
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.estatus"
                        :checked="entry.estatus"
                        @change="updateEstatus"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{ $t('cruds.equiposMovile.fields.estatus') }}</label
                    >
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  components: {
    ClassicEditor
  },
  data() {
    return {
      status: '',
      activeField: '',
      editor: ClassicEditor
    }
  },
  computed: {
    ...mapGetters('EquiposMovilesSingle', ['entry', 'loading', 'lists'])
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
    ...mapActions('EquiposMovilesSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setCodigo',
      'setMarca',
      'setModelo',
      'setNumeroDeSerie',
      'setImei',
      'setPerifericos',
      'setNota',
      'setEstatus'
    ]),
    updateCodigo(e) {
      this.setCodigo(e.target.value)
    },
    updateMarca(value) {
      this.setMarca(value)
    },
    updateModelo(e) {
      this.setModelo(e.target.value)
    },
    updateNumeroDeSerie(e) {
      this.setNumeroDeSerie(e.target.value)
    },
    updateImei(e) {
      this.setImei(e.target.value)
    },
    updatePerifericos(value) {
      this.setPerifericos(value)
    },
    updateNota(value) {
      this.setNota(value)
    },
    updateEstatus(e) {
      this.setEstatus(e.target.checked)
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'equipos_moviles.index' })
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
