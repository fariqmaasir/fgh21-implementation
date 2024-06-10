function divideAndSort(num) {
  let convert = ""
  convert += num
  let container = "";
  let hasil = [];
  let j = 0;

  for (let i = 0; i < convert.length; i++) {
    if (convert[i] === "0" || i === convert.length - 1) {
      if (i === convert.length - 1 && convert[i] !== "0") {
        i = i + 1;
      }
      for (let k = j; k < i; k++) {
        container += convert[k];
      }
      hasil = [...hasil,container];
      container = "";
      j = i + 1;
    }
  }
  for (let c = 0; c < hasil.length; c++) {
    let segment = hasil[c];
    let segmentArr = [];
    for (let i = 0; i < segment.length; i++) {
      segmentArr = [...segmentArr, segment[i]];
    }

    for (let a = 0; a < segmentArr.length - 1; a++) {
      for (let b = 0; b < segmentArr.length - 1 - a; b++) {
        if (segmentArr[b] > segmentArr[b + 1]) {
          let temp = segmentArr[b];
          segmentArr[b] = segmentArr[b + 1];
          segmentArr[b + 1] = temp;
        }
      }
    }

    let sortedSegment = "";
    for (let i = 0; i < segmentArr.length; i++) {
      sortedSegment += segmentArr[i];
    }
    hasil[c] = sortedSegment;
  }

  let finalResult = "";
  for (let i = 0; i < hasil.length; i++) {
    finalResult += hasil[i];
  }

  return finalResult;
}

console.log(divideAndSort(5956560159466056));
