/*
 * @format
 */

import { Order } from "src/entities";

export default (params: any = {}): Order =>
  new Order({
    ...params,
  });
