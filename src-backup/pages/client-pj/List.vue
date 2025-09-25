<template>
  <q-page class="row gutter-sm q-pa-lg">
    <div class="col-12" >
      <q-table
        title="Lista de Clientes PJ"
        :data="list"
        :columns="columns"
        row-key="name"
      >
        <template slot="top-right" slot-scope="props">
          <q-btn to="create-pj" label="Novo Cliente" title="Novo Cliente" color="primary" push icon="add" size="sm" />
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
        name: 'cnpjComMascara',
        required: true,
        label: 'CNPJ com Máscara',
        align: 'left',
        field: 'cnpjComMascara',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'cnpjSemMascara',
        required: true,
        label: 'CNPJ sem Máscara',
        align: 'left',
        field: 'cnpjSemMascara',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'nomeFantasia',
        required: true,
        label: 'Nome Fantasia',
        align: 'left',
        field: 'nomeFantasia',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'razaoSocial',
        required: true,
        label: 'Razão Social',
        align: 'left',
        field: 'razaoSocial',
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
      let collection = this.$firestore.firestore().collection('ClientesPessoaJuridica')
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
