import { ChainId, ChainKey } from '../enums'

export const CHAIN_ID: { [chainKey in ChainKey]: ChainId } = {
  [ChainKey.ETHEREUM]: ChainId.ETHEREUM,
  [ChainKey.RINKEBY]: ChainId.RINKEBY,
  [ChainKey.RINKEBY_SANDBOX]: ChainId.RINKEBY_SANDBOX,
  [ChainKey.BSC]: ChainId.BSC,
  [ChainKey.BSC_TESTNET]: ChainId.BSC_TESTNET,
  [ChainKey.BSC_TESTNET_SANDBOX]: ChainId.BSC_TESTNET_SANDBOX,
  [ChainKey.AVALANCHE]: ChainId.AVALANCHE,
  [ChainKey.FUJI]: ChainId.FUJI,
  [ChainKey.FUJI_SANDBOX]: ChainId.FUJI_SANDBOX,
  [ChainKey.POLYGON]: ChainId.POLYGON,
  [ChainKey.MUMBAI]: ChainId.MUMBAI,
  [ChainKey.MUMBAI_SANDBOX]: ChainId.MUMBAI_SANDBOX,
  [ChainKey.ARBITRUM]: ChainId.ARBITRUM,
  [ChainKey.ARBITRUM_RINKEBY]: ChainId.ARBITRUM_RINKEBY,
  [ChainKey.ARBITRUM_RINKEBY_SANDBOX]: ChainId.ARBITRUM_RINKEBY_SANDBOX,
  [ChainKey.OPTIMISM]: ChainId.OPTIMISM,
  [ChainKey.OPTIMISM_KOVAN]: ChainId.OPTIMISM_KOVAN,
  [ChainKey.OPTIMISM_KOVAN_SANDBOX]: ChainId.OPTIMISM_KOVAN_SANDBOX,
  [ChainKey.FANTOM]: ChainId.FANTOM,
  [ChainKey.FANTOM_TESTNET]: ChainId.FANTOM_TESTNET,
  [ChainKey.FANTOM_TESTNET_SANDBOX]: ChainId.FANTOM_TESTNET_SANDBOX,
  [ChainKey.SWIMMER]: ChainId.SWIMMER,
  [ChainKey.SWIMMER_TESTNET]: ChainId.SWIMMER_TESTNET,
  [ChainKey.SWIMMER_TESTNET_SANDBOX]: ChainId.SWIMMER_TESTNET_SANDBOX,
  [ChainKey.DFK_TESTNET]: ChainId.DFK_TESTNET,
  [ChainKey.DFK_TESTNET_SANDBOX]: ChainId.DFK_TESTNET_SANDBOX,
  [ChainKey.HARMONY]: ChainId.HARMONY,
  [ChainKey.HARMONY_TESTNET]: ChainId.HARMONY_TESTNET,
  [ChainKey.HARMONY_TESTNET_SANDBOX]: ChainId.HARMONY_TESTNET_SANDBOX,
  [ChainKey.ARCANA_TESTNET]: ChainId.ARCANA_TESTNET,
  [ChainKey.ARCANA_TESTNET_SANDBOX]: ChainId.ARCANA_TESTNET_SANDBOX,
  [ChainKey.DEXALOT_TESTNET]: ChainId.DEXALOT_TESTNET,
  [ChainKey.DEXALOT_TESTNET_SANDBOX]: ChainId.DEXALOT_TESTNET_SANDBOX,
}
