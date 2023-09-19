class HashTabel {
    constructor (size) {
        this.tabel  = new Array(size)
        this.size = size
    }
    hashFunction (key) {
        let total = 0 
        for(let i= 0 ; i < key.length ; i++){
            total = total + key.charCodeAt(i)
        }
        return total % this.size
    }
    set (key, value ){
        const index = this.hashFunction(key)
        this.tabel[index] = value
    }
    get (key ){
        const index = this.hashFunction(key)
        return this.tabel[index]
    }
    remove (key) {
        const index = this.hashFunction(key)
        this.tabel[index] = undefined 
    }
}

const hashMap = new HashTabel(50)
hashMap.set('name', 'shardul')
hashMap.set('name1', 'shardul2')
hashMap.remove('name1')
console.log(hashMap.get('name'))