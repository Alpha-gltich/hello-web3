import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { network } from "hardhat";

describe("HelloWeb3", () => {
  it("sets the initial message and owner on deployment", async () => {
    const { viem } = await network.getOrCreate();
    const [owner] = await viem.getWalletClients();

    const helloWeb3 = await viem.deployContract("HelloWeb3", ["Hello, Web3!"]);

    assert.equal(await helloWeb3.read.message(), "Hello, Web3!");
    assert.equal(
      (await helloWeb3.read.owner()).toLowerCase(),
      owner.account.address.toLowerCase()
    );
  });

  it("allows the owner to update the message", async () => {
    const { viem } = await network.getOrCreate();
    const helloWeb3 = await viem.deployContract("HelloWeb3", ["Hello, Web3!"]);

    await helloWeb3.write.setMessage(["Updated message"]);

    assert.equal(await helloWeb3.read.message(), "Updated message");
  });

  it("prevents a non-owner from updating the message", async () => {
    const { viem } = await network.getOrCreate();
    const [, other] = await viem.getWalletClients();

    const helloWeb3 = await viem.deployContract("HelloWeb3", ["Hello, Web3!"]);

    const helloWeb3AsOther = await viem.getContractAt(
      "HelloWeb3",
      helloWeb3.address,
      { client: { wallet: other } }
    );

    await assert.rejects(helloWeb3AsOther.write.setMessage(["Hacked message"]));
  });
});