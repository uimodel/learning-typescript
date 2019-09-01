interface NumberDictionary {
    [index:string]:number
    length: number
    // name: string // 报错  Property 'name' of type 'string' is not assignable to string index type 'number'.
}

