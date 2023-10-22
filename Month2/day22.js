// ❓1️⃣DESCRIPTION:
// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
// Your function also receives a third argument, a string, with the name of the fighter that attacks first.
// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// ✅ SOLUTION
function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health>0 && fighter2.health>0) {
      if (firstAttacker===fighter1.name){
        fighter2.health=fighter2.health-fighter1.damagePerAttack
        firstAttacker=fighter2.name
      } else {
        fighter1.health=fighter1.health-fighter2.damagePerAttack
        firstAttacker=fighter1.name
      }
    }
    return fighter1.health>0 ? fighter1.name : fighter2.name
  }
// 🅾️ other solutions that I liked
// function declareWinner(fighter1, fighter2, firstAttacker) {
//     if (fighter1.name !== firstAttacker) return declareWinner(fighter2, fighter1, fighter2.name)
//     if (fighter1.health <= 0) return fighter2.name
//     if (fighter2.health <= 0) return fighter1.name
//     return declareWinner(new Fighter(fighter2.name, fighter2.health - fighter1.damagePerAttack, fighter2.damagePerAttack), fighter1, fighter2.name)
//   }

// ❓2️⃣DESCRIPTION:
// John has invited some friends. His list is:
// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that
// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
// So the result of function meeting(s) will be:
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.
// ✅ SOLUTION
function meeting(s) {
    // Исходный массив
    const people = s.toUpperCase().split(';').map(e=> e.split(':'))
    function compareNames(a, b) {
    // Сравниваем фамилии
      const lastNameA = a[1];
      const lastNameB = b[1];
      if (lastNameA < lastNameB) {
        return -1;
        }
      if (lastNameA > lastNameB) {
        return 1;
      }
    // Фамилии равны, сравниваем имена
      const firstNameA = a[0];
      const firstNameB = b[0];
      if (firstNameA < firstNameB) {
        return -1;
        }
      if (firstNameA > firstNameB) {
        return 1;
      }
    // Имена тоже равны
      return 0;
    }
      return people.sort(compareNames).map(e=> '(' + e[1] + ', ' + e[0] + ')').join('')
  }
// 🅾️ other solutions that I liked
//  function meeting(s) { return '(' +  s.toUpperCase().split(';').map(x => x.split(':').reverse().join(', ')).sort().join(')(') + ')'}

// ❓3️⃣DESCRIPTION:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
// ✅ SOLUTION
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate)
  }
//
//
// 85.5% to 3kyu