<template>
<!-- eslint-disable -->
  <div v-title="$route.meta.title">
    <h3>{{msg}}</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person,index) in people">
          <td>{{ person.name }}</td>
          <td>{{ person.age }}</td>
          <td>{{ person.sex }}</td>
          <td :class="'text-center'"><button @click="deletePerson(index)">Delete</button></td>
        </tr>
      </tbody>
    </table>
    <div v-for="(item, index) in people">{{index}}</div>
    <div v-for="num in pageCount">{{num}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloDemo',
  data () {
    return {
      msg: 'This is demo',
      people: [{
        name: 'Jack',
        age: 30,
        sex: 'Male'
      }, {
        name: 'Bill',
        age: 26,
        sex: 'Male'
      }, {
        name: 'Tracy',
        age: 22,
        sex: 'Female'
      }, {
        name: 'Chris',
        age: 36,
        sex: 'Male'
      }],
      pageCount: 10
    }
  },
  methods: {
    deletePerson (a) {
      console.log(a)
    }
  }
}
</script>

<style scoped>
  h3 {
    font-size: 16px;
    color: #42b983;
  }
</style>
