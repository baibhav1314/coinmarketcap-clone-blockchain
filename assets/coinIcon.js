import btc from './btc.png'
import eth from './eth.png'
import usdc from './usdc.png'
import usdt from './usdt.png'
import xrp from './xrp.png'
import cardano from './cardano.png'
import tera from './tera.png'
import solana from './solana.png'
import avalanche from './avalanche.png'
import bnb from './bnb.png'
import Image from 'next/image'

const coinIcon = (name, size) => {
  switch (name) {
    case 'Bitcoin':
      return (
        <Image
          src={btc}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )

    case 'Ethereum':
      return (
        <Image
          src={eth}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )

    case 'Tether':
      return (
        <Image
          src={usdt}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )

    case 'BNB':
      return (
        <Image
          src={bnb}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )

    case 'USD Coin':
      return (
        <Image
          src={usdc}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )

    case 'XRP':
      return (
        <Image
          src={xrp}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )

    case 'Cardano':
      return (
        <Image
          src={cardano}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )

    case 'Terra':
      return (
        <Image
          src={tera}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )

    case 'Solana':
      return (
        <Image
          src={solana}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )

    case 'Avalanche':
      return (
        <Image
          src={avalanche}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )

    default:
      return (
        <Image
          src={btc}
          className="rounded-full"
          width={size}
          height={size}
          alt=""
        />
      )
  }
}

export default coinIcon
