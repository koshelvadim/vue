<template>
  <div class="payments__wrap">
    <div class="payments__title">
      <p>№</p>
      <p>Date</p>
      <p>Category</p>
      <p>Value</p>
    </div>
    <hr>
    <div
      class="payments__item"
      v-for="(item, index) in paginatedData"
      :key="index">
      <p>{{ index + 1 }}</p>
      <p>{{ item.date }}</p>
      <p>{{ item.category }}</p>
      <p>{{ item.value }} $ </p>
      <span
        class="context"
        @click="openContextMenu(item, index)">
        :
      </span>
    </div>
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
  .payments__title {
    display: grid;
    grid-template-columns: 50px 100px 100px 100px 10px;
      & p {
        margin: 0;
        font-weight: bold;
      }
  }
  .payments__wrap {
    border: 1px solid black;
    padding: 10px;
  }
  .payments__item {
    position: relative;
    display: grid;
    grid-template-columns: 50px 100px 100px 100px 10px;
    &.active {
      color: orangered;
    }
    & p {
      margin: 5px;
    }
    .context {
      padding: 5px;
      position: relative;
      margin: 0px;
      font-weight: bold;
      &::after {
        content: '.';
        position: absolute;
        top: -8px;
        left: 5.5px;
        font-weight: bold;
      }
      &:hover {
        cursor: pointer;
        background-color: #eee;
      }
    }
  }
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
