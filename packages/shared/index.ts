export function isEven(number:number){
    return number%2 === 1
}

export const isOdd = (x: number) => !isEven(x)
