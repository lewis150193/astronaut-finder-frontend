const findLongestName = (array,type) => {
    let nameLength = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i][type].length > nameLength) {
            nameLength = array[i][type].length
        }
    }
    return nameLength
};

export const makeDashLine = (array,type) => {
    let line = "";
    for (let i = 0; i < findLongestName(array,type) + 2; i++){
        line = line + "-"
    }
    return line
};

