<template>
  <div class="tabela">
    <v-container fluid>
      <v-row dense>
        <v-col>
          <strong>Planeta</strong>
        </v-col>
        <v-col>Clima</v-col>
        <v-col>Terreno</v-col>
        <v-col>Aparições</v-col>
        <v-col></v-col>
      </v-row>

      <v-row dense v-for="planet in planets" :key="planet._id">
        <v-col>{{planet.name}}</v-col>
        <v-col>{{planet.climate}}</v-col>
        <v-col>{{planet.terrain}}</v-col>
        <v-col>{{planet.films}}</v-col>
        <v-col>
          <button class="btn">Excluir</button>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planets: [
        {
          name: "mars",
          climate: "cold",
          terrain: "desert",
          films: "1"
        },
        {
          name: "Jupyter",
          climate: "cold",
          terrain: "seila",
          films: "2"
        },
        {
          name: "terra",
          climate: "hot",
          terrain: "desert",
          films: "2"
        },
        {
          name: "Saturn",
          climate: "cold",
          terrain: "com diamantes",
          films: "7"
        }
      ]
    };
  }
};
</script>

<style scoped>
.btn {
  border-radius: 8px;
  border: 1px solid #000;
  padding: 3px;
}
</style>