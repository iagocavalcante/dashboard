<template>
  <div class="row q-mb-lg">
    <q-card class="col-12">
      <q-card-title>
        Dados do Usuarios
      </q-card-title>
      <q-card-main>
        <div class="row q-mb-sm">
          <div class="col-6">
            <q-field label-width="2" class="q-ml-md" error-label="Campo Obrigatório">
              <q-input
                v-model="usuario.cnpjComMascara"
                float-label="CNPJ com máscara"
                v-mask="'##.###.###/####.##'"
                @input="$v.usuario.cnpjComMascara.$touch()"
                :error="$v.usuario.cnpjComMascara.$error"/>
            </q-field>
          </div>
          <div class="col-6">
            <q-field label-width="2" class="q-ml-md" error-label="Campo Obrigatório">
              <q-input
                v-model="usuario.cnpjSemMascara"
                v-mask="'##############'"
                float-label="CNPJ sem máscara"
                @input="$v.usuario.cnpjSemMascara.$touch()"
                :error="$v.usuario.cnpjSemMascara.$error"/>
            </q-field>
          </div>
        </div>
        <div class="row q-mb-sm">
          <div class="col-6">
            <q-field label-width="2" class="q-ml-md" error-label="Campo Obrigatório">
              <q-input
                v-model="usuario.razaoSocial"
                float-label="Razão Social"
                @input="$v.usuario.razaoSocial.$touch()"
                :error="$v.usuario.razaoSocial.$error"/>
            </q-field>
          </div>
          <div class="col-6">
            <q-field label-width="2" class="q-ml-md" error-label="Campo Obrigatório">
              <q-input
                v-model="usuario.nomeFantasia"
                float-label="Nome Fantasia"
                @input="$v.usuario.nomeFantasia.$touch()"
                :error="$v.usuario.nomeFantasia.$error"/>
            </q-field>
          </div>
        </div>
        <q-btn label="Cadastrar" @click="submit()" title="Cadastrar" class="q-mt-lg" color="primary" push icon="add" />
      </q-card-main>
    </q-card>
  </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data: () => ({
    usuario: {
      cnpjComMascara: '',
      cnpjSemMascara: '',
      nomeFantasia: '',
      razaoSocial: ''
    }
  }),
  methods: {
    submit () {
      this.$v.usuario.$touch()
      if (this.$v.usuario.$error) {
        alert('Por favor, verifique os erros no formulário!')
      } else {
        const collection = this.$firestore.firestore().collection('ClientesPessoaJuridica')
        collection.doc().set(this.usuario)
          .then(() => console.log('Created'))
          .catch(err => console.log(err))
      }
    }
  },
  validations: function () {
    return {
      usuario: {
        cnpjComMascara: {required},
        cnpjSemMascara: {required},
        nomeFantasia: {required},
        razaoSocial: {required}
      }
    }
  }
}
</script>
