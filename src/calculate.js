let Frac = require('fractions'); // lib wich makes simple operations with fractions
 
let operations = {
    '+' (f1, f2) {
        return Frac.add(f1, f2)
    },
    '-' (f1, f2) {
        return Frac.subtract(f1, f2)
    },
    '/' (f1, f2) {
        return Frac.divide(f1, f2)
    },
    'x' (f1, f2) {
        return Frac.multiply(f1, f2)
    }
}
/**
 * calculating with order depending on operation recursively
 * @param {Array} fractions - array of fraction instances
 * @returns {Object} - fraction or error
 */
export const calculate = (fractions) =>  {
    
    // finding first * or / operation and calculate it 
    let first = fractions.find((el, i) => {
        if (el.symbol == 'x' || el.symbol == '/') {
            el.index = i;
            return el
        } 
    })
    //if no * or / operations left calculating + and -
    if (!first) {
        first = fractions.find((el, i) => {
            if (el.symbol == '+' || el.symbol == '-') {
                el.index = i;
                return el
            }
        })
    }
    let res;
    try {
        const f1 = new Frac(first.numerator, first.denominator)
        const f2 = new Frac(fractions[first.index+1].numerator,fractions[first.index+1].denominator)
        res = operations[first.symbol](f1, f2)
    } catch (error) {
        return { message: 'ERROR', error }
    }
    res.symbol = fractions[first.index+1].symbol;
    fractions.splice(first.index, 2, res) 
    
    if (fractions.length > 1) {
        
        calculate(fractions)
    } 
    return fractions[0]
}
