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
                <strong>{{ $t('cruds.equipo.title_singular') }}</strong>
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
                    <label class="bmd-label-floating required">{{
                      $t('cruds.equipo.fields.codigo')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.codigo"
                      @input="updateCodigo"
                      @focus="focusField('codigo')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.owner_id !== null,
                      'is-focused': activeField == 'owner'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.equipo.fields.owner')
                    }}</label>
                    <v-select
                      name="owner"
                      label="name"
                      :key="'owner-field'"
                      :value="entry.owner_id"
                      :options="lists.owner"
                      :reduce="entry => entry.id"
                      @input="updateOwner"
                      @search.focus="focusField('owner')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.tipo,
                      'is-focused': activeField == 'tipo'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.equipo.fields.tipo')
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
                      'has-items': entry.marca_id !== null,
                      'is-focused': activeField == 'marca'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.equipo.fields.marca')
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
                      $t('cruds.equipo.fields.modelo')
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
                      'has-items': entry.procesador_id !== null,
                      'is-focused': activeField == 'procesador'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.equipo.fields.procesador')
                    }}</label>
                    <v-select
                      name="procesador"
                      label="nombre"
                      :key="'procesador-field'"
                      :value="entry.procesador_id"
                      :options="lists.procesador"
                      :reduce="entry => entry.id"
                      @input="updateProcesador"
                      @search.focus="focusField('procesador')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.memoria_ram_id !== null,
                      'is-focused': activeField == 'memoria_ram'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.equipo.fields.memoria_ram')
                    }}</label>
                    <v-select
                      name="memoria_ram"
                      label="tipo"
                      :key="'memoria_ram-field'"
                      :value="entry.memoria_ram_id"
                      :options="lists.memoria_ram"
                      :reduce="entry => entry.id"
                      @input="updateMemoriaRam"
                      @search.focus="focusField('memoria_ram')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.disco_duro_id !== null,
                      'is-focused': activeField == 'disco_duro'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.equipo.fields.disco_duro')
                    }}</label>
                    <v-select
                      name="disco_duro"
                      label="capacidad"
                      :key="'disco_duro-field'"
                      :value="entry.disco_duro_id"
                      :options="lists.disco_duro"
                      :reduce="entry => entry.id"
                      @input="updateDiscoDuro"
                      @search.focus="focusField('disco_duro')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.periferico.length !== 0,
                      'is-focused': activeField == 'periferico'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.equipo.fields.periferico')
                    }}</label>
                    <v-select
                      name="periferico"
                      label="nombre"
                      :key="'periferico-field'"
                      :value="entry.periferico"
                      :options="lists.periferico"
                      :closeOnSelect="false"
                      multiple
                      @input="updatePeriferico"
                      @search.focus="focusField('periferico')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div class="form-group">
                    <label>{{ $t('cruds.equipo.fields.fotos') }}</label>
                    <div class="form-group bmd-form-group has-items">
                      <label class="bmd-label-floating">{{
                        $t('cruds.equipo.fields.fotos_helper')
                      }}</label>
                    </div>
                    <attachment
                      :route="getRoute('equipos')"
                      :collection-name="'equipo_fotos'"
                      :media="entry.fotos"
                      :max-file-size="7"
                      :component="'pictures'"
                      :accept="'image/*'"
                      @file-uploaded="insertFotosFile"
                      @file-removed="removeFotosFile"
                    />
                  </div>
                  <div class="form-group bmd-form-group form-check has-items">
                    <label class="bmd-label-floating">{{
                      $t('cruds.equipo.fields.estatus_helper')
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
                      >{{ $t('cruds.equipo.fields.estatus') }}</label
                    >
                  </div>
                  <div class="form-group">
                    <label>{{ $t('cruds.equipo.fields.nota') }}</label>
                    <ckeditor
                      :editor="editor"
                      :value="entry.nota"
                      @input="updateNota"
                    >
                    </ckeditor>
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  components: {
    Attachment,
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
    ...mapGetters('EquiposSingle', ['entry', 'loading', 'lists'])
  },
  mounted() {
    this.fetchCreateData()
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('EquiposSingle', [
      'storeData',
      'resetState',
      'setCodigo',
      'setOwner',
      'setTipo',
      'setMarca',
      'setModelo',
      'setProcesador',
      'setMemoriaRam',
      'setDiscoDuro',
      'setPeriferico',
      'insertFotosFile',
      'removeFotosFile',
      'setEstatus',
      'setNota',
      'fetchCreateData'
    ]),
    updateCodigo(e) {
      this.setCodigo(e.target.value)
    },
    updateOwner(value) {
      this.setOwner(value)
    },
    updateTipo(value) {
      this.setTipo(value)
    },
    updateMarca(value) {
      this.setMarca(value)
    },
    updateModelo(e) {
      this.setModelo(e.target.value)
    },
    updateProcesador(value) {
      this.setProcesador(value)
    },
    updateMemoriaRam(value) {
      this.setMemoriaRam(value)
    },
    updateDiscoDuro(value) {
      this.setDiscoDuro(value)
    },
    updatePeriferico(value) {
      this.setPeriferico(value)
    },
    updateEstatus(e) {
      this.setEstatus(e.target.checked)
    },
    updateNota(value) {
      this.setNota(value)
    },
    getRoute(name) {
      return `${axios.defaults.baseURL}${name}/media`
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'equipos.index' })
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
