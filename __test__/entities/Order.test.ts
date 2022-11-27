/*
 * @format
 */
import { orderFactory, userFactory, productFactory } from "__test__/factories";

describe("Order", () => {
  const order = orderFactory();

  beforeAll(async () => {
    order.product = await productFactory().save();
    order.user = await userFactory().save();
  });

  it("has valid factory", async () => {
    await order.save();
    expect(order.id).toBeTruthy();
  });
});
