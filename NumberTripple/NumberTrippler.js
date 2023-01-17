exports.TrippleNumbersGetEvenFilter = (numbers) => {
    if (!Array.isArray(numbers)) throw new Error("Invalid Input");

    return numbers.map(element => element * 3).filter((item) => {
        //console.log(item);
        return (item % 2 == 0) ? item : undefined;
    })

}
exports.TrippleNumbersGetEvenReduce = (numbers) => numbers.reduce((acc, item) => {
        if ((item * 3) % 2 === 0) {
            acc.push(item * 3);
        }
        return acc;
    }, []);
