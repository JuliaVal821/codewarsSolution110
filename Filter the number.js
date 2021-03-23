https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

    var FilterString = function(value) {
        let num = '';
        for(let el of value){
            if(isNaN(el) === false){
                num += el;
            }
        }
        return +num;
    }