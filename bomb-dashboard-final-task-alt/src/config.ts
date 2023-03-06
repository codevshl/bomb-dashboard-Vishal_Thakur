import { Configuration } from './bomb-finance/config';
import { BankInfo } from './bomb-finance';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: 56,
    networkName: 'BSC Mainnet',
    ftmscanUrl: 'https://bscscan.com',
    defaultProvider: 'https://rpc.ankr.com/bsc',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      FUSDT: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually BUSD on mainnet not fusdt
      BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18],
      SBTC: ['0x1d28cd41fc594232D05F2AbdAFBb556E7F78Dc2a', 18],
      SUSD: ['0x12017c89444624C0268A1053467e22954F4fd362', 18],
      SVL: ['0x37F14E7c2FadC2A01dBD93b8a1F69D41c6c3d554', 18],
      CAKE: ['0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', 18],
      ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
      BUSD: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18],
      BUSM: ['0x6216B17f696B14701E17BCB24Ec14430261Be94A', 18],
      BOMB: ['0x522348779DCb2911539e76A1042aA922F9C47Ee3', 18],
      '80BOMB-20BTCB-LP': ['0xd6F52e8AB206e59A1E13b3D6c5B7f31E90ef46EF', 18],
      '80BSHARE-20WBNB-LP': ['0x2C374eD1575e5C2C02c569f627299E902A1972cb', 18],
      'BBOMB-BOMB': ['0xcB72214d09a1804E4eecA9C3F3bB6ca49460237b', 18],
      'BBOMB-BTCB': ['0x23EFC2ff90e3423c3F84352b21b49FBcD4C3E32D', 18],
      SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
      'USDT-BNB-LP': ['0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', 18],
      'BUSM-BUSD-LP': ['0xEe46Bd06a8876c3cc86027dc7D2Df19af513cD12', 18],
      BBOND: ['0xDA1d9C79240003195d0a67f202efcCCC3F78b994', 18],
      'USDT-BTCB-LP': ['0x3f803ec2b816ea7f06ec76aa2b6f2532f9892d62', 18],
      'BOMB-BTCB-LP': ['0x84392649eb0bC1c1532F2180E58Bae4E1dAbd8D6', 18],
      'BOMB-BSHARE-LP': ['0x54f9fE531224Fa43Feb218B20ABa84d22a8fDc0C', 18],
      'BOMB-BNB-LP': ['0x107CDC0c46615C63EE4abC4E1e264D3BD12390e6', 18],
      'BSHARE-BNB-LP': ['0x1303246855b5B5EbC71F049Fdb607494e97218f8', 18],
      'BSHARE-BNB-APELP': ['0x0dE2a71b2f43CF588A00422d41E1C02D0E08D552', 18],
      'BOMB-BTCB-APELP': ['0xB6E85031F313563bF12ea414118978C8BD78db5D', 18],
    },
    baseLaunchDate: new Date('2021-11-20 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2021-11-20T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: 56,
    networkName: 'BSC Mainnet',
    ftmscanUrl: 'https://bscscan.com',
    //defaultProvider: 'https://rpc.ankr.com/bsc/45201ee6b17d73e401be85a55927da2fb732de7e15051ef8f281ec1cdc888ba8',
    defaultProvider: 'https://rpc.ankr.com/bsc',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      FUSDT: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually BUSD on mainnet not fusdt
      BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18],
      BBOND: ['0xDA1d9C79240003195d0a67f202efcCCC3F78b994', 18],
      SBTC: ['0x1d28cd41fc594232D05F2AbdAFBb556E7F78Dc2a', 18],
      'BBOMB-BOMB': ['0xcB72214d09a1804E4eecA9C3F3bB6ca49460237b', 18],
      'BBOMB-BTCB': ['0x23EFC2ff90e3423c3F84352b21b49FBcD4C3E32D', 18],
      SVL: ['0x37F14E7c2FadC2A01dBD93b8a1F69D41c6c3d554', 18],
      BUSM: ['0x6216B17f696B14701E17BCB24Ec14430261Be94A', 18],
      BUSD: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18],
      SUSD: ['0x12017c89444624C0268A1053467e22954F4fd362', 18],
      CAKE: ['0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', 18],
      ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
      SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
      BOMB: ['0x522348779DCb2911539e76A1042aA922F9C47Ee3', 18],
      '80BOMB-20BTCB-LP': ['0xd6F52e8AB206e59A1E13b3D6c5B7f31E90ef46EF', 18],
      '80BSHARE-20WBNB-LP': ['0x2C374eD1575e5C2C02c569f627299E902A1972cb', 18],
      'USDT-BNB-LP': ['0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', 18],
      'USDT-BTCB-LP': ['0x3f803ec2b816ea7f06ec76aa2b6f2532f9892d62', 18],
      'BOMB-BTCB-LP': ['0x84392649eb0bC1c1532F2180E58Bae4E1dAbd8D6', 18],
      'BUSM-BUSD-LP': ['0xEe46Bd06a8876c3cc86027dc7D2Df19af513cD12', 18],
      'BOMB-BSHARE-LP': ['0x54f9fE531224Fa43Feb218B20ABa84d22a8fDc0C', 18],
      'BOMB-BNB-LP': ['0x107CDC0c46615C63EE4abC4E1e264D3BD12390e6', 18],
      'BSHARE-BNB-LP': ['0x1303246855b5B5EbC71F049Fdb607494e97218f8', 18],
      'BSHARE-BNB-APELP': ['0x0dE2a71b2f43CF588A00422d41E1C02D0E08D552', 18],
      'BOMB-BTCB-APELP': ['0xB6E85031F313563bF12ea414118978C8BD78db5D', 18],
    },
    baseLaunchDate: new Date('2021-11-20 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2021-11-20T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  
  BombSBTCRewardPool: {
    name: 'Earn BOMB by SBTC',
    poolId: 2,
    sectionInUI: 0,
    contract: 'BombSBTCRewardPool',
    depositTokenName: 'SBTC',
    earnTokenName: 'BOMB',
    finished: true,
    sort: 4,
    closedForStaking: true,
  },
  BombSUSDRewardPool: {
    name: 'Earn BOMB by SUSD',
    poolId: 1,
    sectionInUI: 0,
    contract: 'BombSUSDRewardPool',
    depositTokenName: 'SUSD',
    earnTokenName: 'BOMB',
    finished: true,
    sort: 5,
    closedForStaking: true,
  },
  BombMaxiLPBShareRewardPool: {
    name: 'Earn BSHARE by BOMB Maxi LP',
    poolId: 7,
    sectionInUI: 2,
    contract: 'BombMaxiLPBShareRewardPool',
    depositTokenName: '80BOMB-20BTCB-LP',
    earnTokenName: 'BSHARE',
    finished: false,
    sort: 0,
    closedForStaking: false,
  },
  BshareMaxiLPBShareRewardPool: {
    name: 'Earn BSHARE by BSHARE Maxi LP',
    poolId: 8,
    sectionInUI: 2,
    contract: 'BshareMaxiLPBShareRewardPool',
    depositTokenName: '80BSHARE-20WBNB-LP',
    earnTokenName: 'BSHARE',
    finished: false,
    sort: 1,
    closedForStaking: false,
  },
  BusmBusdLPBShareRewardPool: {
    name: 'Earn BSHARE by BUSM-BUSD LP',
    poolId: 6,
    sectionInUI: 1,
    contract: 'BusmBusdLPBShareRewardPool',
    depositTokenName: 'BUSM-BUSD-LP',
    earnTokenName: 'BSHARE',
    finished: false,
    sort: 0,
    closedForStaking: false,
  },
  BombBShareRewardPool: {
    name: 'Earn BSHARE by BOMB',
    poolId: 5,
    sectionInUI: 0,
    contract: 'BombBShareRewardPool',
    depositTokenName: 'BOMB',
    earnTokenName: 'BSHARE',
    finished: false,
    sort: 4,
    closedForStaking: true,
  },
  BBondBShareRewardPool: {
    name: 'Earn BSHARE by BBOND',
    poolId: 9,
    sectionInUI: 3,
    contract: 'BBondBShareRewardPool',
    depositTokenName: 'BBOND',
    earnTokenName: 'BSHARE',
    finished: false,
    sort: 4,
    closedForStaking: false,
  },
  BshareBnbLPBShareRewardPool: {
    name: 'Earn BSHARE by BSHARE-BNB LP',
    poolId: 0,
    sectionInUI: 3,
    contract: 'BshareBnbLPBShareRewardPool',
    depositTokenName: 'BSHARE-BNB-LP',
    earnTokenName: 'BSHARE',
    finished: false,
    sort: 2,
    closedForStaking: false,
  },
  BombBtcbLPBShareRewardPool: {
    name: 'Earn BSHARE by BOMB-BTCB LP',
    poolId: 1,
    sectionInUI: 3,
    contract: 'BombBtcbLPBShareRewardPool',
    depositTokenName: 'BOMB-BTCB-LP',
    earnTokenName: 'BSHARE',
    finished: false,
    sort: 1,
    closedForStaking: false,
  },
  BombBshareLPBShareRewardPool: {
    name: 'Earn BSHARE by BOMB-BSHARE LP',
    poolId: 4,
    sectionInUI: 0,
    contract: 'BombBshareLPBShareRewardPool',
    depositTokenName: 'BOMB-BSHARE-LP',
    earnTokenName: 'BSHARE',
    finished: false,
    sort: 4,
    closedForStaking: false,
  },
};

export default configurations[process.env.NODE_ENV || 'development'];
