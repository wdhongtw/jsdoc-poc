/**
 * Our common library module
 * @module libs
 */

/**
 * The Person class
 */
class Person {
    /**
     * Constructor for Person
     * @param {string} name The name
     * @param {number} age The age
     */
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    /**
     * Return hello string of the person
     * @param {string} prefix Prefix of hello string
     * @returns {string} The hello string
     */
    hello(prefix) {
        return prefix + " I'm " + this.name
    }
}

/**
 * The Person
 * @constructor
 * @param {string} name 
 * @param {number} age 
 */
function ThePerson(name, age) {
    this.name = name
    this.age = age
}

/**
 * @see {@linkcode Person#hello}
 */
ThePerson.prototype.hello = Person.prototype.hello

/**
 * @constructor
 * @param {string} name 
 * @param {number} age 
 * @param {string} major 
 */
function Student(name, age, major) {
    ThePerson.call(this, name, age)
    this.major = major
}

Student.prototype = Object.create(ThePerson.prototype)

/**
 * Test is student major is
 * @param {string} major
 * @returns {boolean}
 */
Student.prototype.isMajorin = function(major) {
    return this.major === major
}

/**
 * Turn name into upper case string
 * @param {string} name The name to handle
 * @returns {string} The upper case NAME
 */
function toUpper(name) {
    return name.toUpperCase()
}

exports.Person = Person
exports.toUpper = toUpper
exports.Student = Student
