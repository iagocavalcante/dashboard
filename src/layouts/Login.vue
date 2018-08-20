<template>
  <q-layout view="lHh Lpr lFf" class="img-background" style="border: solid 1px black">
   <q-page-container class="container-fluid">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
::-webkit-scrollbar {
display: none;
}
.img-background{
  background: #fff url(https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74450f7cf15b30e723c1a6d49abcc62c&auto=format&fit=crop&w=750&q=80);
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.dark{
  /* color: #fff !important; */
  background: #42424236;
  /* opacity: 0.3; */
}
</style>
