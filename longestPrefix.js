var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
         return
     }
    let commonPreFix = ''
    strs.sort()
 
    for(let i = 0; i<strs[0].length ; i++) {
        if (strs[0].charAt(i) == strs[strs.length - 1].charAt(i)) {
            commonPreFix += strs[0].charAt(i)
        } else {
            break
        }
    }
 
    return commonPreFix
 };