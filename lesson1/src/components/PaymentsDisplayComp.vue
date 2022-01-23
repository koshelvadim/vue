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
      <p>{{ item.id }}</p>
      <p>{{ item.date }}</p>
      <p>{{ item.category }}</p>
      <p>{{ item.value }} $</p>
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

export default {
  name: 'PaymentsDisplayComp',
  props: {
    items: {
      type: Array,
      required: true,
    },
    size: {
      type: Number,
      required: false,
      default: 5,
    },
  },
  data: () => ({
    pageNumber: 0,
  }),
  methods: {
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
  },
  computed: {
    pageCount() {
      const l = this.items.length;
      const s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size;
      const end = start + this.size;
      return this.items.slice(start, end);
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
    grid-template-columns: 50px 100px 100px 100px;
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
    display: grid;
    grid-template-columns: 50px 100px 100px 100px;
    & p {
      margin: 5px;
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
