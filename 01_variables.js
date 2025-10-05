const accountId = 13456
let accountEmail="hitesh@google.com"
var accontPassword ="12345"
accountCity="Moradabad"
//accountId=2 //not allowed
accountEmail="manish@gmail.com"
accountPassword="2341568"
console.log(accountId)
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity])