const isPalindrom = "malam"
let container = ""
for (let i = isPalindrom.length-1; i >= 0; i--) {
  container = container + isPalindrom[i]
}
if (container == isPalindrom) {
  console.log("palindrom")
}