

export class Tags {
  [key: string]: boolean

  static convertToTags(array: string[], initial: boolean = true) {
    const keyvalue = {}
    array.forEach(s => {
      keyvalue[s] = initial
    })
    return keyvalue;
  }
}





