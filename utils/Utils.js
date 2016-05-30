/**
 * Created by Eric-mac on 16/3/19.
 */


export function awaitFetch(url, param={method: 'get'}){
    try{
        return fetch(url, param).then(
            function(res){
                return res.json()
            })
            .then(
                function(json){
                    return json;
                }
            )
    }catch (e){
        console.log("oops error", e)
    }
}


export function empty (mixed_var) {
    var undef, key, i, len
    var emptyValues = [undef, null, false, 0, '', '0']

    for (i = 0, len = emptyValues.length; i < len; i++) {
        if (mixed_var === emptyValues[i]) {
            return true
        }
    }

    if (typeof mixed_var === 'object') {
        for (key in mixed_var) {
            return false
        }
        return true
    }

    return false
}