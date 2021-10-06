function arrayDiff(a, b) {
    let c = a.concat(b)
    let arr = []
   a.map((item, index)=>{
        b.map((a)=>{
            item !== a ? arr.push(item): ''
        })
    })
    console.log(arr)
}

arrayDiff([], [4,5])
    // , [], "a was [], b was [4,5]");
arrayDiff([3,4], [3])
    // , [4], "a was [3,4], b was [3]");
arrayDiff([1,8,2], [])
    // , [1,8,2], "a was [1,8,2], b was []");
arrayDiff([1,2,3], [1,2])
    // , [3], "a was [1,2,3], b was [1,2]")
