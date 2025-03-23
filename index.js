const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = ourReduce(batteryBatches, (total, batch) => total + batch, 0);

console.log(totalBatteries);

function ourReduce(arr, reducer, init) {
    let accum = init;
    for (const element of arr) {
        accum = reducer(accum, element);
    }
    return accum;
}