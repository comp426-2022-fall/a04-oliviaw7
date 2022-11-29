export function roll(sides, dice, rolls) {
    var results = []
    // roll # times specified 
    for (var i=0; i<rolls; i++) {
        var sum = 0
        // roll each dice 
        for (var j=0; j<dice; j++) {
            sum += Math.floor(Math.random() * sides) + 1 
        }
        results.push(sum)
    }
    return JSON.stringify({"sides": sides, "dice": dice, "rolls": rolls, "results": results})
}