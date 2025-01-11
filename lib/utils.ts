

export type empty = null|undefined
export const isEmpty = <T>(o: empty|T): o is empty => o===null || o===undefined

export const nonEmpty = <T>(o: empty|T): o is T => o!==null && o!==undefined
//export const notEmpty = <T extends any>(value: T): value is Exclude<T, null|undefined> => value!==null && value!==undefined


// сделать каждое свойство переданного типа T не readonly и опциональным
export type Optional<T> = {
    -readonly [Prop in keyof T]?: T[Prop]
}
// каждое свойство в T должно быть обязательным и не undefined
export type Require<T> = {
    [Prop in keyof T]-?: T[Prop]
}
// каждое свойство в T должно быть undefined и не обязательным
export type AllUndef<T> = {
    [Prop in keyof T]?: undefined
}

// todo XorType


// todo законспектировать себе keyof & Mapped Types
// объект с любым количеством любых свойств
// можно сделать {type: string} & anyObj и тогда можно задавать любые свойства но type будет обязателен
export type anyObj = { [prop in string | number]: any }

export const emptyFun: (...args: unknown[])=>unknown = ()=>{}





const fitRange = (min: number, curr: number, max: number) => curr<min ? min : curr>max ? max : curr
const inRange = (min: number, curr: number, max: number) => curr>=min && curr<=max
