function well(x){
    let good = x.filter(word => word.length > 3) // create new array with number of "good" as elements
    if(good.length === 0){ 
      return 'Fail!' //return 'Fail' if new array is empty
    }else if(good.length <= 2){
      return 'Publish!' // return 'Publish' if length of array is less than or equal to 2
    }else if (good.length > 2){
      return 'I smell a series!' // return 'I smell a series' if length of array is greater than 2
    }
    }