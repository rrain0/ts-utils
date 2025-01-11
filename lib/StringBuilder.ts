

// todo store array of code points (integer numbers) (symbol number in unicode table)
// todo wtf code: dsb.replace(e-1,e,String.fromCodePoint(dsb.charAt(e-1).codePointAt(0)+1)) - увеличить последний символ на 1




export class StringBuilder{
    chars: string[] = []

    constructor(str?: string|null|undefined) {
        this.set(str)
    }

    set(str?: string|null|undefined){
        if (str) this.chars = [...str]
        else this.clear()
    }

    /**
     * Insert into begin of string
     */
    placeFirst(str: string){
        this.chars = [...str, ...this.chars]
        return this
    }

    /**
     * Insert into end of string
     */
    append(str: string){
        this.chars = [...this.chars, ...str]
        return this
    }

    /**
     * Insert into string
     */
    insert(idx: number, str: string){
        this.chars.splice(idx, 0, ...[...str])
        return this
    }


    remove(s: number, e?: number){
        if (e) this.chars.splice(s,e-s)
        else this.chars.splice(s)
        return this
    }

    removeLen(s: number, len?: number){
        if (len) this.chars.splice(s,len)
        else this.chars.splice(s)
        return this
    }

    retain(s: number, e?: number){
        if (e) this.chars = this.chars.slice(s,e)
        else this.chars = this.chars.slice(s)
        return this
    }

    retainLen(s: number, len?: number){
        if (len) this.chars = this.chars.slice(s,s+len)
        else this.chars = this.chars.slice(s)
        return this
    }


    replace(s: number, e: number, str: string){
        this.chars.splice(s, e-s, ...[...str])
        return this
    }

    replaceLen(s: number, len: number, str: string){
        this.chars.splice(s, len, ...[...str])
        return this
    }



    charAt(idx: number){ return this.chars[idx] }

    charCodeAt(idx: number){ return this.chars[idx].codePointAt(0) }

    firstChar(){ return this.chars[0] }

    firstCharCode(){ return this.chars[0].codePointAt(0) }

    lastChar(){ return this.chars[this.chars.length-1] }

    lastCharCode(){ return this.chars[this.chars.length-1].codePointAt(0) }



    findFirst(char: string){
        let idx = this.chars.indexOf(char)
        return idx===-1 ? undefined : idx
    }

    findLast(char: string){
        let idx = this.chars.lastIndexOf(char)
        return idx===-1 ? undefined : idx
    }


    clear(){ this.chars = [] }

    len(){ return this.chars.length }

    isEmpty(){ return this.len()===0 }

    toString(){ return this.chars.join("") }
}