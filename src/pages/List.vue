<template>
  <q-page class="row gutter-sm q-pa-lg">
    <div class="col-12" >
      <q-table
        title="Table Title"
        :data="tableData"
        :columns="columns"
        row-key="name"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data: () => ({
    columns: [
      {
        name: 'asdf',
        required: true,
        label: 'Dessert (100g serving)',
        align: 'left',
        field: 'name',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'sdf',
        required: true,
        label: 'Calories',
        align: 'left',
        field: 'name',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'fasdf32asd',
        required: true,
        label: 'Fat (g)',
        align: 'left',
        field: 'name',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'afsd12fasdf',
        required: true,
        label: 'Carbs (g)',
        align: 'left',
        field: 'name',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'asdfassdf',
        required: true,
        label: 'Protein (g)',
        align: 'left',
        field: 'name',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'asdfasdf',
        required: true,
        label: 'Sodium (mg)',
        align: 'left',
        field: 'name',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'asdfasd1f',
        required: true,
        label: 'Calcium (mg)',
        align: 'left',
        field: 'name',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      }
    ],
    tableData: [
      {
        name: 'Frozen',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%'
      },
      {
        name: 'Frozen 1',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%'
      },
      {
        name: 'Frozen 2',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%'
      },
      {
        name: 'Frozen 3',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%'
      },
      {
        name: 'Frozen 4',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%'
      },
      {
        name: 'Frozen 5',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%'
      },
      {
        name: 'Frozen 6',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%'
      },
      {
        name: 'Frozen 7',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%'
      },
      {
        name: 'Frozen 8',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%'
      },
      {
        name: 'Frozen 9',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%'
      },
      {
        name: 'Frozen 10',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%'
      }
    ]
  })
}
</script>
