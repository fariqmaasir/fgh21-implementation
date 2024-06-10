function FazzFood(price, disc, distance, tax) {
    //----------VOUCHER VALIDATION----------
    // When user use FAZZFOOD50
    if (disc === "FAZZFOOD50" && price >= 50000) {
        userDisc = price * 50/100
        if (userDisc > 50000) {
            userDisc = 50000
        }

    // When user use DITRAKTIR60
    } else if(disc === "DITRAKTIR60" && price >= 25000) {
        userDisc = price * 60/100
        if (userDisc > 30000) {
            userDisc = 30000
        }
    // When user Doesnt use any voucher
    } else if(disc === ""|| disc === null){
        userDisc = 0
    // When user voucher is invalid
    } else {
        console.log("YOUR DISCOUNT VOUCHER ISN'T VALID")
        return
    }

    //----------DELIVERY FEE----------
    deliveryFee = 5000
    if (distance > 2) {
        deliveryFee += (distance - 2) * 3000
    }

    //----------TAX----------
    if (tax) {
        tax = price * 5/100
    } else {
        tax = 0
    }

    //----------TOTAL----------
    let total = price - userDisc + deliveryFee + tax
    //----------THE OUTPUT----------
    console.log("Harga : " + price)
    console.log("Potongan : " + userDisc)
    console.log("Biaya antar : " + deliveryFee)
    console.log("Pajak : " + tax)
    console.log("Subtotal : " + total)
}

FazzFood(75000, "FAZZFOOD50", 5, true)