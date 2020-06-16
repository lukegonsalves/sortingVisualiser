export function bubbleSort(array) {
    console.log(array);
    const steps = [];
        for(let i = 0; i < array.length; i++){ 
            for(let j = 0; j < array.length; j++){
                if(array[j] > array[j + 1]){
                    steps.push([j, j+1]);
                    let tmp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = tmp;
                }
            }
        }
        console.log(array);
        return steps;
};