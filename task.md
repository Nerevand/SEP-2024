# Classes and Prototypes

1. create a new branch from the current one _hw5_
2. In that branch, create a few JS files with exercise numbers, for example task1.js, task2.js, etc.
3. In those files, implement solutions for the tasks.

**TASK 1**

> write a constructor function `PersonFunc` which accepts the person data like `below` and implements following methods:

- getFullName() => returns string in format `"[FirstName] [LastName]"`, e.g. _'User Name'_;
- getAge() => returns age of person in format `"[number] years"`, e.g. _"20 years"_;
- getFullAddress() => returns address string in format `"[country], [city], [street], [house]/[apartment]"`. Field `apartment` is optional. E.g. _"Ukraine, Lviv, Doroshenka street, 5/8"_ and _"Ukraine, Lviv, Muchna street, 7"_.
  > // NOTE: Please implement error handling in case if some fields are not available.

**TASK 2**

> write a constructor function `WorkingPersonFunc` which inherits from `PersonFunc` and implements additional method:

- getProfessionalNameAndRank() => returns string in format `"[FirstName] [LastName], [job title], job experience [job experience duration] years"`, e.g. _"User Name, Front-end developer, job experience 5 years"_.
  > // NOTE: Please implement error handling in case if some fields are not available.

**TASK 3**

> write a class `PersonClass` which has the same functionality as `PersonFunc` constructor function.  
> Don't forget to implement error handling in case if some fields are not available here as well.
>
> **TASK 4**

> write a class `WorkingPersonClass` which inherits from `PersonClass` and has the same functionality as `WorkingPersonFunc`.  
> Don't forget to implement error handling in case if some fields are not available here as well.

```
const SarahMay = {
  firstName: "Sarah",
  lastName: "May",
  birthDate: "13.03.1990",
  address: {
    country: "Spain",
    city: "Seville",
    street: "calle Verde",
    house: "5",
    apartment: "2A",
  },
  job: {
    title: "teacher",
    experience: 5
  }
}

const JeremieBrown = {
  firstName: "Jeremie",
  lastName: "Brown",
  birthDate: "10.11.1983",
  address: {
    country: "Great Britain",
    city: "Bristol",
    street: "Park street",
    house: "14"
  },
  job: {
    title: "sale manager",
    experience: 10
  }
}

const Elizabeth = {
  firstName: "Elizabeth",
  birthDate: "27.02.1998",
  address: {
    country: "Italy",
    city: "Verona",
    street: "via Calchirelli",
    house: "9F",
    apartment: "49",
  },
  job: {
    title: "fitness coach",
    experience: 1.5
  }
}

```

5. OPTIONAL: (repeating functions) on freeCodeCamp in JavaScript an data structures unit pass functional programming part mostly paying attention to given information https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#functional-programming
6. once done, create pull request into current branch _hw5_

## To read

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes - Object prototypes
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes - Classes
