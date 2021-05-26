let number="11.1"
number=parseFloat(number)
console.log("number:",number,typeof(number))
number=number.toString()
console.log(number,typeof(number),String(123))
console.log(''+123)//Implicit Coercion(örtülü dönüşün)
console.log(String(123))//Explicit Coercion (aşçık dönüşüm)
console.log(['a']+[9,2,3])
console.log(12/'2')
console.log(NaN===NaN)
console.log("foo" + +"bar")// +"bar" => Number("bar") => NaN //"foo"+NaN //"foo" +"NaN" //Sonuç= "fooNaN"
console.log(1 == true)
console.log(null=="")// null sadece kendine ve undefined'a eşit olduğundan //Sonuç= false
let userName="jupi"
let domain="jupi.com"
let info=`merhaba ${userName} 
mail adersiniz ${domain}
${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}
`
console.log(info)