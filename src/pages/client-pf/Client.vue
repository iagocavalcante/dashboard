<template>
  <div class="row q-mb-lg">
    <q-card class="col-12">
      <q-card-title>
        Dados do Usuarios
      </q-card-title>
      <q-card-main>
        <div class="row q-mb-sm">
          <div class="col-6">
            <q-field label-width="2" error-label="Campo Obrigatório">
              <q-input
                v-model="usuario.cpfComMascara"
                v-mask="'###.###.###-##'"
                float-label="CPF com máscara"
                @input="$v.usuario.cpfComMascara.$touch()"
                :error="$v.usuario.cpfComMascara.$error"/>
            </q-field>
          </div>
          <div class="col-6">
            <q-field label-width="2" class="q-ml-md" error-label="Campo Obrigatório">
              <q-input
                v-model="usuario.cpfSemMascara"
                v-mask="'###########'"
                float-label="CPF sem máscara"
                @input="$v.usuario.cpfSemMascara.$touch()"
                :error="$v.usuario.cpfSemMascara.$error"/>
            </q-field>
          </div>
        </div>
        <div class="row q-mt-sm">
          <div class="col-6">
            <q-field label-width="2" error-label="Campo Obrigatório">
              <q-input
                v-model="usuario.dataNascimento"
                v-mask="'##/##/####'"
                float-label="Data de Nascimento"
                @input="$v.usuario.dataNascimento.$touch()"
                :error="$v.usuario.dataNascimento.$error"/>
            </q-field>
          </div>
          <div class="col-6">
            <q-field class="q-ml-md" label-width="2" error-label="Campo Obrigatório">
              <q-input
                v-model="usuario.nome"
                float-label="Nome"
                @input="$v.usuario.nome.$touch()"
                :error="$v.usuario.nome.$error"/>
            </q-field>
          </div>
        </div>
        <div class="row q-mt-sm">
          <div class="col-6">
            <q-field label-width="2" error-label="Campo Obrigatório">
              <q-input
                v-model="usuario.rg"
                v-mask="'##.###.###-#'"
                float-label="RG"
                @input="$v.usuario.rg.$touch()"
                :error="$v.usuario.rg.$error"/>
            </q-field>
          </div>
        </div>
        <q-btn @click="submit()" label="Cadastrar" title="Cadastrar" class="q-mt-lg" color="primary" push icon="add" />
      </q-card-main>
    </q-card>
  </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data: () => ({
    usuario: {
      cpfComMascara: '',
      cpfSemMascara: '',
      dataNascimento: '',
      nome: '',
      rg: ''
    }
  }),
  methods: {
    submit () {
      this.$v.usuario.$touch()
      if (this.$v.usuario.$error) {
        alert('Por favor, verifique os erros no formulário!')
      } else {
        const collection = this.$firestore.firestore().collection('ClientesPessoaFisica')
        collection.doc().set(this.usuario)
          .then(() => console.log('Created'))
          .catch(err => console.log(err))
      }
    }
  },
  validations: function () {
    return {
      usuario: {
        cpfComMascara: {required},
        cpfSemMascara: {required},
        dataNascimento: {required},
        nome: {required},
        rg: {required}
      }
    }
  }
}
</script>
