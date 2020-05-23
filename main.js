const libs = require('./libs')

/**
 * The main function
 */
function main() {
    let person = new libs.Person('Alice', 23)
    console.log(person.hello('Hi,'))
    let upperName = libs.toUpper(person.name)
    console.log(upperName)

    let student = new libs.Student('Bob', 33, 'Algorithm')
    const isMajor = student.isMajorin('Algorithm')
    console.log(student.hello('Hi,'))
    console.log(isMajor)
    console.log('Hi')
}

main()
