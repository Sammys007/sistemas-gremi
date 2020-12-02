<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary card-header-icon">
            <div class="card-icon">
              <i class="material-icons">remove_red_eye</i>
            </div>
            <h4 class="card-title">
              {{ $t('global.view') }}
              <strong>{{ $t('cruds.equipo.title_singular') }}</strong>
            </h4>
          </div>
          <div class="card-body">
            <back-button></back-button>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <div class="table">
                    <tbody>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.equipo.fields.id') }}
                        </td>
                        <td>
                          {{ entry.id }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.equipo.fields.codigo') }}
                        </td>
                        <td>
                          {{ entry.codigo }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.equipo.fields.owner') }}
                        </td>
                        <td>
                          <datatable-single :row="entry" field="owner.name">
                          </datatable-single>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.equipo.fields.tipo') }}
                        </td>
                        <td>
                          <datatable-enum :row="entry" field="tipo">
                          </datatable-enum>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.equipo.fields.marca') }}
                        </td>
                        <td>
                          <datatable-single :row="entry" field="marca.nombre">
                          </datatable-single>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.equipo.fields.modelo') }}
                        </td>
                        <td>
                          {{ entry.modelo }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.equipo.fields.procesador') }}
                        </td>
                        <td>
                          <datatable-single
                            :row="entry"
                            field="procesador.nombre"
                          >
                          </datatable-single>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.equipo.fields.memoria_ram') }}
                        </td>
                        <td>
                          <datatable-single
                            :row="entry"
                            field="memoria_ram.tipo"
                          >
                          </datatable-single>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.equipo.fields.disco_duro') }}
                        </td>
                        <td>
                          <datatable-single
                            :row="entry"
                            field="disco_duro.capacidad"
                          >
                          </datatable-single>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.equipo.fields.periferico') }}
                        </td>
                        <td>
                          <datatable-list
                            :row="entry"
                            field="periferico.nombre"
                          >
                          </datatable-list>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.equipo.fields.fotos') }}
                        </td>
                        <td>
                          <datatable-pictures :row="entry" :field="'fotos'">
                          </datatable-pictures>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.equipo.fields.estatus') }}
                        </td>
                        <td>
                          <datatable-checkbox :value="entry.estatus">
                          </datatable-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.equipo.fields.nota') }}
                        </td>
                        <td>
                          <ckeditor
                            :editor="editor"
                            :value="entry.nota"
                            disabled
                          >
                          </ckeditor>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.equipo.fields.created_at') }}
                        </td>
                        <td>
                          {{ entry.created_at }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.equipo.fields.updated_at') }}
                        </td>
                        <td>
                          {{ entry.updated_at }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.equipo.fields.deleted_at') }}
                        </td>
                        <td>
                          {{ entry.deleted_at }}
                        </td>
                      </tr>
                    </tbody>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DatatableSingle from '@components/Datatables/DatatableSingle'
import DatatableEnum from '@components/Datatables/DatatableEnum'
import DatatableList from '@components/Datatables/DatatableList'
import DatatablePictures from '@components/Datatables/DatatablePictures'
import DatatableCheckbox from '@components/Datatables/DatatableCheckbox'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  components: {
    DatatableSingle,
    DatatableEnum,
    DatatableList,
    DatatablePictures,
    DatatableCheckbox,
    ClassicEditor
  },
  data() {
    return {
      editor: ClassicEditor
    }
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('EquiposSingle', ['entry'])
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchShowData(this.$route.params.id)
      }
    }
  },
  methods: {
    ...mapActions('EquiposSingle', ['fetchShowData', 'resetState'])
  }
}
</script>
