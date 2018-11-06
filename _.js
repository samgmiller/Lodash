
/**
 * @_ This is a JavaScript file containing several methods that work on various objects.  It was written by Sam Miller
 * as homework for a Codecademy JavaScript course.
 *
 */
const _ = {
    /**
     * @_.clamp Arguments:
     * num - number to be checked | clamped,
     * lowerLim - the lower clamping limit number, and
     * upperLim - the upper clamping limit number.
     *
     * Returns: boolean
     *
     * Description:"clamps" the num  to inclusive upper and lower limits simply using if stmts to check .
     *
     */
    clamp (num, lowerLim, upperLim) {
        if (lowerLim >= upperLim) {
            return undefined;
        }
        if (num > upperLim) {
            return upperLim;
        }else if (num < lowerLim)
        {
            return lowerLim;
        }else return num;
    },
    /**
     * @_.inRange Arguments:
     * num - number to be checked,
     * start - optional number defining the lower boundary (inclusive) of num.  If omitted, it will default to 0.
     * end - the upper boundary number (non inclusive) of num.
     *
     * Returns: boolean
     *
     * Description: checks to determine if num falls within the range of start and end.  The start and end numbers
     * will be reversed if start is greater than end.
     *
     */
    inRange (num, start, end) {
        if (end === undefined || end === null) {
            end = start;
            start = 0;
        }else if (start > end)
        {
            let tempStart = start;
            start = end;
            end = tempStart;
        }
        if (num < end && num >= start) {
            return true;
        }else return false;
    },
    /**
     * @_.words Arguments:
     * str - string of words to be broken into and array of words
     *
     * Returns: array of words in str
     *
     * Description: parses through str and adds an array element for each string bounded by space.
     *
     */
    words (str) {
        return str.split(' ');
    },
    /**
     * @_.pad Arguments:
     * str - string
     * length - length of desired string
     *
     * Returns: string with blank ' ' added to make str the desired length.
     *
     */
    pad (str, length) {
        if (str.length > length) {
            return str;
        }
        let beginPad = Math.floor((length - str.length)/2);
        let endPad = Math.round((length - str.length)/2);
        let paddedStr = str.padStart(beginPad + str.length, ' ');
        paddedStr = paddedStr.padEnd(endPad + paddedStr.length, ' ');
        return paddedStr;
    },
    /**
     * @_.has Arguments:
     * object - object to be searched.
     * key - key that is being checked to see if a value exists at that key
     *
     * Returns: boolean, true if value at key exists false if not.
     *
     */
    has (object, key) {
        let hasValue = object[key];
        return hasValue !== undefined;
    },
    /**
     * @_.invert Arguments:
     * object - object to be inverted.
     *
     * Returns: object with all key value pairs swapped.
     *
     */
    invert (object) {
        let reversedObject ={};
        for (let key in object) {
            const oldVal = object[key];
            reversedObject[oldVal] = key;
        }
        return reversedObject;
    },
    /**
     * @_.findKey Arguments:
     * object - object to be checked for truthiness of the predicate function.
     * predicate - function that returns a boolean
     *
     * Returns: the first key that returns true when iterating through the object and checking the predicate function.
     * if no values return true undefined is returned.
     *
     */
    findKey (object, predicate) {
        for (let key in object) {
            if (predicate(object[key])) {
                return key;
            }
        }
        return undefined;
    },
    /**
     * @_.drop Arguments:
     * array - array to be reduced or chopped.
     * numChop - number of elements to be removed from end of the array. defaults to 1 if not included.
     *
     * Returns: array that has numChop elements removed from the end of the original array.
     *
     */
    drop (array, numChop) {
        if (numChop === undefined || numChop === null){
            numChop = 1;
        }
        return array.slice(numChop);
    },
    /**
     * @_.dropWhile Arguments:
     * array - array to be reduced or chopped.
     * predicate - function with 2 arguments:
     *      current element to execute boolean function
     *      current index of element.
     *
     * Returns: array sliced to remove any values that returned true when executed by the predicate function.
     * As soon as False occurs during the iteration the process is stopped.
     *
     */
    dropWhile (array, predicate) {
        let newObj = array;
        let index = 0;
        do {
            if (predicate(array[index], index)) {
                newObj = newObj.slice(1);
            }
            index++;
        } while (predicate(array[index], index) || index >= array.length);
        return newObj;
    },
    /**
     * @_.chunk Arguments:
     * array - array to be processed.
     * size - number representing the desired length of elements in new array
     *
     * Returns: array of elements split into new elements the length of size.
     *
     */
    chunk (array, size) {
        if (size === undefined || size === null) {
            size = 1;
        }
        let arrOfChunks = [];
        // below steps though the array in "size" steps and slices off "size" elements and adds them to the returned array.
        // much easier than the do while method I originally tried below.
        for (let i = 0; i < array.length; i = i + size) {
            arrOfChunks.push(array.slice(i, i + size));
        }
        return arrOfChunks;
    }
    /**
     * @_.chunk Arguments:
     *  a more complicated way to accomplish chunk using do, while loops.
     *
     */
    /*chunk (array, size) {

        let chunkArr = [];
        if (size === undefined || size === null) {
            size = 1;
        }
        let chunkElements = Math.ceil(array.length / size);
        let arrIndex = 0;
        let chunkIndex = 0;
        do {
            let tempArr = [];
            let indexLittle = 0;
            do {

                tempArr[indexLittle] = array[arrIndex];
                indexLittle ++;
                arrIndex ++;
            } while (indexLittle < size && arrIndex < (array.length));
            chunkArr[chunkIndex] = tempArr;
            chunkIndex ++;
        } while (chunkIndex < chunkElements);

        return chunkArr;
    },*/

};


// Do not write or modify code below this line.
module.exports = _;