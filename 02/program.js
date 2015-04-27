var index = 2;
var sum = 0;

while (process.argv[index]) {
	var num = +(process.argv[index]);
	sum += num;
	index++;
}

console.log(sum);
