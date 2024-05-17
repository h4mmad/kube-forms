export class Helper {
  public convertKeyValArrToStrStrObj(type1: { key: string; value: string }[]): {
    [key: string]: string;
  } {
    const result: { [key: string]: string } = {};

    type1.forEach((item) => {
      result[item.key] = item.value;
    });

    return result;
  }
}
