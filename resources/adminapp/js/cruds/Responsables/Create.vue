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
                <strong>{{ $t('cruds.responsable.title_singular') }}</strong>
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
                    <label class="required">{{
                      $t('cruds.responsable.fields.nombre')
                    }}</label>
                    <div
                      class="form-group bmd-form-group"
                      :class="{
                        'has-items': entry.nombre,
                        'is-focused': activeField == 'nombre'
                      }"
                    >
                      <label class="bmd-label-floating">{{
                        $t('cruds.responsable.fields.nombre_helper')
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
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.puesto_id !== null,
                      'is-focused': activeField == 'puesto'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.responsable.fields.puesto')
                    }}</label>
                    <v-select
                      name="puesto"
                      label="nombre"
                      :key="'puesto-field'"
                      :value="entry.puesto_id"
                      :options="lists.puesto"
                      :reduce="entry => entry.id"
                      @input="updatePuesto"
                      @search.focus="focusField('puesto')"
                      @search.blur="clearFocus"
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
                      $t('cruds.responsable.fields.owner')
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
    ...mapGetters('ResponsablesSingle', ['entry', 'loading', 'lists'])
  },
  mounted() {
    this.fetchCreateData()
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('ResponsablesSingle', [
      'storeData',
      'resetState',
      'setNombre',
      'setPuesto',
      'setOwner',
      'fetchCreateData'
    ]),
    updateNombre(e) {
      this.setNombre(e.target.value)
    },
    updatePuesto(value) {
      this.setPuesto(value)
    },
    updateOwner(value) {
      this.setOwner(value)
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'responsables.index' })
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
