/*
 * @format
 */
import { productFactory } from "__test__/factories";

describe("Product", () => {
  const product = productFactory();

  it("has valid factory", async () => {
    await product.save();
    expect(product.id).toBeTruthy();
  });
});
