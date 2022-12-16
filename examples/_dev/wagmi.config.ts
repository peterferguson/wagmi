import { defineConfig, etherscan, foundry } from '@wagmi/cli'

export default defineConfig({
  out: 'src/wagmi.ts',
  contracts: [
    etherscan({
      apiKey: 'MK9NWF5JSK6JPWDMVTIJF4RZ466VD2XEPZ',
      chainId: 1,
      contracts: [
        {
          name: 'WagmiMintEtherscan',
          address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
        {
          name: 'EnsRegistry',
          address: {
            1: '0x314159265dd8dbb310642f98f50c066173c1259b',
            5: '0x112234455c3a32fd11230c42e7bccd4a84e02010',
          },
        },
      ],
    }),
    foundry({
      namePrefix: 'HelloFoundry',
      project: '../hello_foundry',
      forge: {
        build: true,
        rebuild: true,
      },
    }),
    {
      name: 'WagmiMintInline',
      address: '0xaf0326d92b97df1221759476b072abfd8084f9be',
      abi: [
        {
          inputs: [],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
      ],
    },
  ],
})
