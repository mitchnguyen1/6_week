// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

// The number passed in tells you how many floors the tower should have.

// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.

// Each block is represented by a *.

// For example, a tower of 3 floors looks like this (note the spacing):

// [
//     '  *  ',
//     ' *** ',
//     '*****'
// ]
// and a tower of 6 floors looks like this:

// [
//     '     *     ',
//     '    ***    ',
//     '   *****   ',
//     '  *******  ',
//     ' ********* ',
//     '***********'
// ]

//(n*2)-1
//1=1
//2=3
//3=5
//4=7 4 space=/2 per side
//5=9 2 space=/2 per side
//6=11

//stars = (n*2)-1
//spaces per side=(bottom # of stars - current stars)/2
const builtTower = n => {
    let ans = []
    let bottom = (n*2)-1
    while(n > 0){
        let stars = (n*2)-1
        let space = (bottom - stars)/2
        let temp = ""
        for(let i = 0; i < space; i++){
            temp += " "
        }
        while(stars > 0){
            temp += "*"
            stars--
        }
        for(let i = 0; i < space; i++){
            temp += " "
        }
        ans.unshift(temp)
        temp = ""
        n--;
    }
    return ans;
}

console.log(builtTower(6))