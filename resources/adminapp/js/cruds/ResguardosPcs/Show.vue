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
              <strong>{{ $t('cruds.resguardosPc.title_singular') }}</strong>
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
                          {{ $t('cruds.resguardosPc.fields.id') }}
                        </td>
                        <td>
                          {{ entry.id }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.resguardosPc.fields.folio') }}
                        </td>
                        <td>
                          {{ entry.folio }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.resguardosPc.fields.fecha') }}
                        </td>
                        <td>
                          {{ entry.fecha }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.resguardosPc.fields.responsable') }}
                        </td>
                        <td>
                          <datatable-single
                            :row="entry"
                            field="responsable.nombre"
                          >
                          </datatable-single>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.resguardosPc.fields.equipo') }}
                        </td>
                        <td>
                          <datatable-single :row="entry" field="equipo.codigo">
                          </datatable-single>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.resguardosPc.fields.nota') }}
                        </td>
                        <td>
                          {{ entry.nota }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.resguardosPc.fields.created_at') }}
                        </td>
                        <td>
                          {{ entry.created_at }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.resguardosPc.fields.pdf') }}
                        </td>
                        <td>
                          <datatable-attachments :row="entry" :field="'pdf'">
                          </datatable-attachments>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.resguardosPc.fields.updated_at') }}
                        </td>
                        <td>
                          {{ entry.updated_at }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.resguardosPc.fields.deleted_at') }}
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
import DatatableAttachments from '@components/Datatables/DatatableAttachments'

export default {
  components: {
    DatatableSingle,
    DatatableAttachments
  },
  data() {
    return {}
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('ResguardosPcsSingle', ['entry'])
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
    ...mapActions('ResguardosPcsSingle', ['fetchShowData', 'resetState'])
  }
}
</script>
