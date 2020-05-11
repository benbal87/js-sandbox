let callback = () => {
  console.log("CALLBACK")
}

let test = (callback) => {
  console.log('TEST')
  callback()
}

test(callback)