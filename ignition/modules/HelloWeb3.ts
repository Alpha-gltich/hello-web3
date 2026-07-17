import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("HelloWeb3Module", (m) => {
  const helloWeb3 = m.contract("HelloWeb3", ["Hello, Web3!"]);

  return { helloWeb3 };
});