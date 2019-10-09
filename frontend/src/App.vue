<template>
  <v-container>
    <Header />
    <Tabela />
  </v-container>
</template>

<script>
import Header from "./components/Header";
import Tabela from "./components/Tabela";

export default {
  name: "App",
  components: {
    Header,
    Tabela
  },
  data: () => ({
    //
  })
};
</script>
