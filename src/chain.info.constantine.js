export const config = {
  STAKING_CONTRACT: "juno1g7v2vrx95uxpwhpdyj6r0qgrlt3kqjqygwp6wy6ayktrklz4v04s06apfn",
  STAKING_TOKEN_ADDRESS: "juno17pevjnfrg36h80refmsdgqn4puxmp9d6lqtkhh6xn45r2q3flp2qsmmzep",
  CHAIN_ID: "uni-5",
  CHAIN_NAME: "Juno Testnet - Uni",
  CHAIN_BECH32_PREFIX: "juno",
  COIN_DENOM: "juno",
  COIN_MINIMAL_DENOM: 'ujunox',
  CHAIN_RPC_ENDPOINT: "https://rpc.juno.giansalex.dev",
  CHAIN_REST_ENDPOINT: "https://lcd.juno.giansalex.dev",
  STAKING_DENOM: "ujunox",
  COIN_DECIMALS: 6
}
export const ConstantineInfo = {
  chainId: config.CHAIN_ID,
  chainName: config.CHAIN_NAME,
  rpc: config.CHAIN_RPC_ENDPOINT,
  rest: config.CHAIN_REST_ENDPOINT,
  
  stakeCurrency: {
    coinDenom: config.COIN_DENOM,
    coinMinimalDenom: config.COIN_MINIMAL_DENOM,
    coinDecimals: config.COIN_DECIMALS,
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: config.CHAIN_BECH32_PREFIX,
    bech32PrefixAccPub: `${config.CHAIN_BECH32_PREFIX}pub`,
    bech32PrefixValAddr: `${config.CHAIN_BECH32_PREFIX}valoper`,
    bech32PrefixValPub: `${config.CHAIN_BECH32_PREFIX}valoperpub`,
    bech32PrefixConsAddr: `${config.CHAIN_BECH32_PREFIX}valcons`,
    bech32PrefixConsPub: `${config.CHAIN_BECH32_PREFIX}valconspub`,
  },
  currencies: [{
    coinDenom: config.COIN_DENOM,
    coinMinimalDenom: config.COIN_MINIMAL_DENOM,
    coinDecimals: config.COIN_DECIMALS,
  }, ],
  feeCurrencies: [{
    coinDenom: config.COIN_DENOM,
    coinMinimalDenom: config.COIN_MINIMAL_DENOM,
    coinDecimals: config.COIN_DECIMALS,
    gasPriceStep: {
      low: 0.001,
      average: 0.0025,
      high: 0.025,
    },
  }, ],
  coinType: 118,
  features: ['ibc-transfer'],

}
