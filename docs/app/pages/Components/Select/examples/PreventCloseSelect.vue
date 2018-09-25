<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-25">
      <md-field>
        <label for="movie">Movie</label>
        <md-select v-model="handleSelection" name="movie" id="movie">
          <md-option value="Apollo13" preventClose>Apollo 13 🚀🌍🌓</md-option>
          <md-option value="fight-club">Fight Club</md-option>
          <md-option value="godfather">Godfather</md-option>
          <md-option value="godfather-ii">Godfather II</md-option>
          <md-option value="godfather-iii">Godfather III</md-option>
          <md-option value="godfellas">Godfellas</md-option>
          <md-option value="pulp-fiction">Pulp Fiction</md-option>
          <md-option value="scarface">Scarface</md-option>
        </md-select>
      </md-field>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PreventCloseSelect',
    data: () => ({
      movie: 'godfather',
      country: null,
      font: null
    }),
    computed: {
      handleSelection: {
        get() {
          return this.movie;
        },
        set(value) {
          if (value === 'Apollo13') {
            alert('See? it works and you can do whatever you want! 🙌');
            return;
          }
        }
      }
    }
  }
</script>
