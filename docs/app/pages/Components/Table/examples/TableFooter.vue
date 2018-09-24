<template>
  <div>
    <md-table v-model="data" md-sort="id" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Bookings</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.label }}</md-table-cell>
        <md-table-cell md-label="Bookings" md-sort-by="bookings">{{ item.bookings }}</md-table-cell>
        <md-table-cell md-label="Revenue" md-sort-by="revenue">{{ item.revenue }}</md-table-cell>
        <md-table-cell md-label="Nights" md-sort-by="nights">{{ item.nights }}</md-table-cell>
      </md-table-row>

      <tr slot="md-table-footer-row" class="md-table-row table__footer-row" slot-scope="{}">
        <td v-for="(item, index) in sumData" :key="index" class="md-table-cell">
          <div class="md-table-cell-container">
            {{ item.data }}
          </div>
        </td>
      </tr>
    </md-table>
  </div>
</template>

<script>
  export default {
    name: 'TableFooter',
    data: () => ({
      data: [
        {
          id: 1,
          label: 'Elda Palumbo',
          bookings: 10,
          revenue: '250$',
          nights: 5,
        },
        {
          id: 2,
          label: 'Pacifico Giordano',
          bookings: 5,
          revenue: '1910$',
          nights: 15,
        },
        {
          id: 3,
          label: 'Sig. Avide Guerra',
          bookings: 4,
          revenue: '10$',
          nights: 1,
        },
        {
          id: 4,
          label: 'Yago Amato',
          bookings: 2,
          revenue: '600$',
          nights: 6,
        },
      ],
      sumData: [
        {
          data: 'Sum'
        },
        {
          data: 21,
        },
        {
          data: '2770$'
        },
        {
          data: 27
        }
      ]
    })
  }
</script>

<style lang="scss">
  .table__footer-row {
    background: #f4f4f4;
    font-weight: 600;
  }
</style>
