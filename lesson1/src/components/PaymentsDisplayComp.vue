<template>
  <div>
    <v-container px-2>
      <v-row>
        <v-col cols=1>№</v-col>
        <v-col cols=4>Date</v-col>
        <v-col cols=5>Category</v-col>
        <v-col cols=2>Value</v-col>
      </v-row>
      <v-row
        v-for="({ date, category, value}, index) in paginatedData"
        :key="index">
        <v-col cols=1>{{ index + 1 }}</v-col>
        <v-col cols=4>{{ date }}</v-col>
        <v-col cols=5>{{ category }}</v-col>
        <v-col cols=2>{{ value }} $ </v-col>
        <span
        class="context"
        @click="openContextMenu(item, index)">
        :
        </span>
      </v-row>
    </v-container>
    <hr>
    <div class="pagination">
      <ul>
        <button
          class="button"
          :disabled="pageNumber === 0"
          @click="prevPage">
          Previous
        </button>
        <li
          class="pag"
          v-for="(p) in pageCount"
          :key="p">
          {{ p }}
        </li>
        <button
          class="button"
          :disabled="pageNumber >= pageCount -1"
          @click="nextPage">
          Next
        </button>
      </ul>
    </div>
  </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'PaymentsDisplayComp',
  data: () => ({
    pageNumber: 0,
  }),
  methods: {
    ...mapMutations(['CLEAR_CLASS_ACTIVE']),
    nextPage() {
      this.pageNumber += 1;
      const listPage = document.querySelectorAll('.pag');
      listPage.forEach((item) => {
        if (Number(item.innerHTML) === this.pageNumber + 1) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    },
    giveClassActive() {
      setTimeout(() => {
        document.querySelector('.pag').classList.add('active');
      }, 1500);
    },
    prevPage() {
      this.pageNumber -= 1;
      const listPage = document.querySelectorAll('.pag');
      listPage.forEach((item) => {
        if (+item.innerHTML === this.pageNumber + 1) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    },
    openContextMenu(item, index) {
      this.CLEAR_CLASS_ACTIVE();
      const payItems = document.querySelectorAll('.payments__item');
      payItems[index].classList.add('active');
      this.$contextmenu.show(item);
    },
  },
  computed: {
    ...mapGetters(['paymentsList', 'size']),

    pageCount() {
      const l = this.paymentsList.length;
      const s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size;
      const end = start + this.size;
      return this.paymentsList.slice(start, end);
    },
  },
  mounted() {
    this.giveClassActive();
  },
};

</script>

<style lang="scss" scoped>
  .pagination {
    &__item {
      padding: 0 5px;
      text-decoration: none;
    }
  }
  .pagination{
    & ul {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
      & li {
          list-style: none;
          margin: 10px;
          &.active{
            font-weight: bold;
            color: red;
          }
      }
    }
    button:hover{
      cursor:pointer;
    }
    button:hover:disabled{
      cursor:not-allowed;
    }
  }
</style>
