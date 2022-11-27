/*
 * @format
 */

import { Product } from "src/entities";
import { commerce } from "faker";

export default (params: any = {}): Product =>
  new Product({
    name: commerce.productName(),
    price: commerce.price(10, 10000, 0),
    ...params,
  });
