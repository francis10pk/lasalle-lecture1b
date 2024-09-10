const app = Vue.createApp({

    //template: '<h3> CourseName name is: Trends in technologies</h3>'
    data(){
        return{
            title: 'Trends in technology',
            time: '12:00pm',
            age: 14,
            showTime : true,
            Show:'Hide',
            students:[{name:'Paulo',job:'Engineer',isStudent:true},{name:'Jose',job:'Acccountant',isStudent:true},{name:'German',job:'Teacher',isStudent:false}]
        }
    },

    methods: {
        increaseAge(){
            this.age = this.age + 1
        },
        decreaseAge(){
            this.age = this.age - 1
        },
        handleShowTime(){
            this.showTime = !this.showTime
            if(this.showTime==false){
                this.Show = "Show"
            }else{
                this.Show = "Hide"
            }
        },
        handleShowTime2(){
            this.showTime = !this.showTime}
    },

    computed: {
        filteredStudents(){
            return this.students.filter(
                (student) => student.isStudent
            )
        }
    }

})
//Everything that goes on the const app goes to the id=app
app.mount('#app')