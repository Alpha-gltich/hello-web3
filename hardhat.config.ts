import { defineConfig } from "hardhat/config";
import hardhatNodeTestRunner from "@nomicfoundation/hardhat-node-test-runner";
import hardhatViem from "@nomicfoundation/hardhat-viem";

export default defineConfig({
  plugins: [hardhatNodeTestRunner, hardhatViem],
  solidity: {
    version: "0.8.28",
  },
  paths: {
    tests: {
      nodejs: "test",
    },
  },
});