<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script src="https://unpkg.com/vue"></script>
    <title>VUE</title>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <div id='app'>
      <h1>{{ message }}</h1>
      <input type="button" v-bind:value="valbutton" v-on:click='toogleLorem'>
      <p v-if='showLorem'>Lorem Ipsum</p>    <!-- alternatif v-show -->
      <h2>Form new Student</h2>
      <form v-on:submit.prevent='submitNewStudent'>
          <input type="text" name="name" value="" v-model='formNewStudent.name'>
          <input type="number" name="age" value="" v-model='formNewStudent.age'>
          <input type="submit"  value="Submit">
      </form>
      <p v-if='formNewStudent.name !== null || formNewStudent.age !== null'>
        Name student adalah {{formNewStudent.name}} dan dia berusia {{formNewStudent.age}}
      </p>

      <table class='table table-hover'>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(student, index) in students'>
            <td>{{ student.id }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.age }}</td>
            <td>
              <button type="button" name="button" v-on:click=deleteStudent> Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
    <script>
      new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!',
          valbutton: 'ini button',
          showLorem: false,
          students: [
            {id: 0, name: 'jainal', age: 16},
            {id: 1, name: 'nasikin', age: 16},
            {id: 2, name: 'dimas', age: 16}
          ],
          formNewStudent: {
            name: null,
            age: null
          },
          err: false,
          errMsg: ''
        },
        methods: {
          toogleLorem () {
            console.log('toogle jalan');
            this.showLorem = !this.showLorem
          },
          submitNewStudent () {

            // axios.post('/students')
            // .then(response => {
            //   this.students.push(response.data)
            // })
            // .catch(err => {
            //   this.err = true;
            //   this.errMsh = 'Ga ada API'
            // })

            this.formNewStudent.id = this.students.length + 1;
            let newStudent = {
              id: this.students.length,
              // id: '' ,
              name: this.formNewStudent.name,
              age:  this.formNewStudent.age
              // ...this.formNewStudent
            }
            this.students.push(newStudent)
          },
          deleteStudent(index) {
            this.students.splice(index, 1)
          }
        },

        // mounted:  // udah selesai dipasang di web ui
        // created: // udah jadi tapi belum ditampilkan
        // created () {
        //   axios.get('https://swapi.co/api/people')
        //   .then(response => {
        //     console.log(response.data.results);
        //     this.students = response.data.results
        //   })
        //   .catch(err => {console.log(err);})
        // }

      })
    </script>
  </body>
</html>

<!--
var a = [1,2,3]
var b = [4,5,6]
var c = [...a, ...b] -->
