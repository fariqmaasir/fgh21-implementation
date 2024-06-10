function reverseWord(kalimat) {
  let hasil = [];
  let container = "";
  let j = 0;
  for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === " " || i == kalimat.length - 1) {
      if (i === kalimat.length - 1) {
        i = i + 1;
      } else {
        i = i;
      }
      for (let k = j; k < i; k++) {
        j = k + 2;
        container = container + kalimat[k];
      }
      hasil = [container, ...hasil];
      container = "";
    }
  }
  let hasilAKhir = "";
  for (let i = 0; i < hasil.length; i++) {
    if (i > 0) {
      hasilAKhir += " " + hasil[i];
    } else {
      hasilAKhir += hasil[i];
    }
  }
  console.log(hasilAKhir);
}
reverseWord("Saya belajar javascript");
