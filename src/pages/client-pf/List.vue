<template>
  <q-page class="row gutter-sm q-pa-lg">
    <div class="col-12" >
      <q-table
        title="Lista de Clientes PF"
        :data="list"
        :columns="columns"
        row-key="name"
      >
        <template slot="top-right" slot-scope="props">
          <q-btn to="create-pf" label="Novo Cliente" title="Novo Cliente" color="primary" push icon="add" size="sm" />
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data: () => ({
    columns: [
      {
        name: 'cpfComMascara',
        required: true,
        label: 'CPF com Máscara',
        align: 'left',
        field: 'cpfComMascara',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'cpfSemMascara',
        required: true,
        label: 'CPF sem Máscara',
        align: 'left',
        field: 'cpfSemMascara',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'dataNascimento',
        required: true,
        label: 'Data Nascimento',
        align: 'left',
        field: 'dataNascimento',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'nome',
        required: true,
        label: 'Nome',
        align: 'left',
        field: 'nome',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'rg',
        required: true,
        label: 'RG',
        align: 'left',
        field: 'rg',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      }
    ],
    list: []
  }),
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      let collection = this.$firestore.firestore().collection('ClientesPessoaFisica')
      collection.get()
        .then(querySnapshot => {
          querySnapshot.forEach(todo => {
            this.list.push(todo.data())
            console.log(todo.data())
          })
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
