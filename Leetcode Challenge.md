```js
var obj = {
    a: {
        b: {
            c: 12
        }
    },
    findPath:(path)=>{
        const keys = path.split('.');
        let firstKey = Object.keys(obj)[0];
        let tmp = {
           [firstKey]:obj[Object.keys(obj)[0]]
    }
        for(let i=0;i<keys.length;i++){
                if(!tmp.hasOwnProperty(keys[i])){
                    return undefined;   
                }   
                tmp = tmp[keys[i]];
        }
        return tmp;
    }
};






console.log(obj.findPath('a.b.c')); // 12
console.log(obj.findPath('a.b')); // {c: 12}
console.log(obj.findPath('a.b.d')); // undefined
console.log(obj.findPath('a.c')); // undefined
console.log(obj.findPath('a.b.c.d')); // undefined
console.log(obj.findPath('a.b.c.d.e')); // undefined
```
code is in js ..save as .js and run!!