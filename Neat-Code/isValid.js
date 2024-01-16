var isValid = function(s) {

  let valid = true;
  let a = s.split("");

  let stack = [];
  if(a.length <= 1) {
      return false;
  }

  for(let i = 0; i <= a.length - 1; i ++) {

      if(a[i] === "[" || a[i] === "{" || a[i] ==="("){
          stack.push(a[i])
          continue;
      } else if (a[i] === ')' && stack[stack.length - 1] !== '(') {
          return false;
      } else if (a[i] === ']' && stack[stack.length - 1] !== '[') {
          return false;
      } else if (a[i] === '}' && stack[stack.length - 1] !== '{') {
          return false;
      } else {
          stack.pop()
      }

  }
  if(stack.length !== 0) {
      return false;
  }

  return true;
};