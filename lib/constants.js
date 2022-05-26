import dai from '../smart-contract/artifacts/contracts/Dai.sol/Dai.json'
import doge from '../smart-contract/artifacts/contracts/Dogecoin.sol/Dogecoin.json'
import link from '../smart-contract/artifacts/contracts/Link.sol/Link.json'
import usdc from '../smart-contract/artifacts/contracts/Usdc.sol/Usdc.json'

export const dogeAbi = doge.abi
export const daiAbi = dai.abi
export const linkAbi = link.abi
export const usdcAbi = usdc.abi

export const dogeAddress = '0xC5BA411D61C6a8d82eFE26216FBc1DC03ae14322'
export const linkAddress = '0xe82a5D8d9d32242d4ABb95052624de9F9bC646F5'
export const daiAddress = '0xA1705128ED1E74f95d214999D2c3325F016099B7'
export const usdcAddress = '0x0e6671DBB3Aee46703fa0686b4043B679b93940c'
