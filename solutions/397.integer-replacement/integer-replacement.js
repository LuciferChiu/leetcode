/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
   	var count = 0
	while(n > 1){
		if(n%2 == 0){
			n /=2
		}else if((n+1)%4 == 0 && n !=3 ){
			n++
		}else{
			n--
		}
		count++
	}
	return count
};