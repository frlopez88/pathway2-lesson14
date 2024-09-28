export class Person {

    constructor(name, age){
        this.name = name 
        this.age = age
    }

}

export class Employee extends Person {

    constructor( name, age, company, jobTitle, salary ){

        super(name, age)

        this.company = company
        this.jobTitle = jobTitle
        this.salary = salary 
        this.workedHours = 0
        this.payCheckCounter = 0

    }

    work( x ){
        this.workedHours = this.workedHours + x
    }

    recievePayment() {
        this.payCheckCounter = this.payCheckCounter + 1
    }

}


export class Athlete extends Person {


    constructor(name, age, sport){

        super(name, age)
        this.sport = sport 
        this.competitions = []

    }

    compete(nameOfCompetition ){
        competitions.push(nameOfCompetition)
    }

    getAmountOfCompetitions(){
        return this.competitions.length
    }

}


export class Student extends Person {

    constructor(name, age, school, gradeLevel){
        super(name, age)
        this.school = school
        this.gradeLevel = gradeLevel
        this.courses = []
    }

    enroll(courseName){
        courses.push(courseName)
    }

    getAmounrOfCourses(){
        return this.courses.length
    }

}