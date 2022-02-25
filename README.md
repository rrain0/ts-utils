# @rrain/ts-utils
Utility TypeScript functions &amp; types.
Contains: inRange, StringBuilder, isEmpty, nonEmpty


## Install
`npm i @rrain/ts-utils`


## Usage

`inRange(minValue, maxValue, currentValue)`
makes `currentValue` to be in range [`minValue`, `maxValue`]

```
let a
let r
a = 50
r = inRange(0,100,a) // => 50
r = inRange(50,50,a) // => 50
r = inRange(70,100,a) // => 70
r = inRange(49,49.999,a) // => 49.999
```

`isEmpty(object)` checks if `object` is `null` or `undefined`

`nonEmpty(object)` checks if `object !== null && !== undefined`

`StringBuilder` let you easy way to modify `string`

```
let sb = new StringBuilder('some string')
let s = sb.replace(0,5,'awesome').replaceLen(8,1,'S').append("Builder").toString() // => awesome StringBuilder
```

StringBuilder methods:

`set(str?: string | null | undefined): void` equlas to new StringBuilder(str)

`first(str: string): this` insert to start

`append(str: string): this`

`insert(idx: number, str: string): this`

`remove(s: number, e?: number): this`

`removeLen(s: number, len?: number): this`

`retain(s: number, e?: number): this`

`retainLen(s: number, len?: number): this`

`replace(s: number, e: number, str: string): this`

`replaceLen(s: number, len: number, str: string): this`

`charAt(idx: number): string`

`charCodeAt(idx: number): number | undefined`

`firstChar(): string`

`firstCharCode(): number | undefined`

`lastChar(): string`

`lastCharCode(): number | undefined`

`findFirst(char: string): number | undefined`

`findLast(char: string): number | undefined`

`clear(): void`

`len(): number`

`isEmpty(): boolean`

`toString(): string`
