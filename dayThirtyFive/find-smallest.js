class SmallestIntegerFinder {
  findSmallestInt(args) {
    // create temp variable
    let temp = args[0];
    for(let i = 1; i < args.length; i++) {
      if(args[i] < temp){ temp = args[i]}; 
    }
    return temp
  }
}