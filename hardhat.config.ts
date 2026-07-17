import { defineConfig } from "hardhat/config";
import hardhatNodeTestRunner from "@nomicfoundation/hardhat-node-test-runner";
import hardhatViem from "@nomicfoundation/hardhat-viem";
import hardhatIgnitionViem from "@nomicfoundation/hardhat-ignition-viem";

export default defineConfig({
  plugins: [hardhatNodeTestRunner, hardhatViem, hardhatIgnitionViem],
  solidity: {
    version: "0.8.28",
  },
  paths: {
    tests: {
      nodejs: "test",
    },
  },
});