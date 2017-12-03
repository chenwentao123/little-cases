/**
 * Created by CWT on 2017/12/3.
 */
define(['isArray'],function(isArray){
    function sortArr(arr){
        if(isArray(arr)){
           return arr.sort(function(a,b){
                return a- b;
            });
        }else{
            console.log('返回的不是一个数组');
        }
    }
    return sortArr;
});