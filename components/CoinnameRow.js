import React, { useContext } from 'react'
import { CoinMarketContext } from '../context/context'
import Image from 'next/image'
import coinIcon from '../assets/coinIcon'

const styles = {
  coinNameRow: 'flex items-center',
  buyButton: `bg-[#1A1F3A] text-[#6188FF] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-50`,
}

const CoinnameRow = ({ name, icon, clicked }) => {
  const { openModal } = useContext(CoinMarketContext)
  return (
    <div className={styles.coinNameRow}>
      <div className="mr-3 flex" onClick={clicked}>
        <div className="mr-2">{coinIcon(name, 20)}</div>
        {name}
      </div>

      <p>
        {name === 'Bitcoin' || name === 'Ethereum' || name === 'Tether' ? (
          <span className={styles.buyButton} onClick={() => openModal()}>
            Buy
          </span>
        ) : (
          <></>
        )}
      </p>
    </div>
  )
}

export default CoinnameRow
