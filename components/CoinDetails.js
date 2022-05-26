import Image from 'next/image'
import DropdownBtn from './buttons/DropdownBtn'
import Rate from './cmc-table/Rate'
import RateFilled from './buttons/RateFilled'
import { useMoralis } from 'react-moralis'
import coinIcon from '../assets/coinIcon'

const styles = {
  coinDetails: `min-h-screen text-white`,
  coinDetailsLinks: `flex mt-3 flex-wrap`,
  greyBtn: `mr-3 mb-3 bg-slate-800 px-3 py-1 rounded-xl`,
  borderLeft: `ml-10 pl-5 w-full border-l border-gray-800`,
  title: `text-gray-400 whitespace-nowrap mr-2`,
  coinDetailsWrapper: `coin-details flex max-w-screen-xl m-auto pt-20`,
  coinSymbol: `bg-slate-800 flex items-center px-2 rounded-xl`,
  coinInfo: `flex justify-between mt-10 p-4 border-t border-gray-800`,
  coinRates: `w-full flex items-start justify-between`,
  flexBetween: `flex justify-between`,
}

const CoinDetails = ({ coinName, coinSymbol, price }) => {
  return (
    <main className={styles.coinDetails}>
      <div>
        <div className={styles.coinDetailsWrapper}>
          <div className="flex w-fit flex-col">
            <div className="flex items-center">
              {coinIcon(coinName, 50)}
              &nbsp; &nbsp;
              <div>
                <div className="flex">
                  <p className="text-3xl">{coinName}</p>
                  &nbsp; &nbsp;&nbsp; &nbsp;
                  <p className={styles.coinSymbol}>{coinSymbol}</p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className={styles.coinDetailsLinks}>
              <div className={styles.greyBtn}>solana.com</div>
              <div className={styles.greyBtn}>Explorers</div>
              <div className={styles.greyBtn}>Community</div>
              <div className={styles.greyBtn}>Chat</div>
              <div className={styles.greyBtn}>Source code</div>
              <div className={styles.greyBtn}>Whitepaper</div>
            </div>
            <br />
            Topics
            <div className={[styles.coinDetailsLinks, 'topics']}>
              <div className={styles.greyBtn}>Mineable</div>
              <div className={styles.greyBtn}>PoW</div>
              <div className={styles.greyBtn}>SHA-256</div>
              <div className={styles.greyBtn}>Store of value</div>
            </div>
          </div>

          <div className="-ml-16">
            <div className={styles.coinRates}>
              <div>
                <p className="text-gray-400">
                  {coinName} ({coinSymbol})
                </p>
                <div className="my-3 flex">
                  <h1 className="text-4xl">${price}</h1>
                  <RateFilled />
                </div>
                <div className="flex items-start">
                  <p className="text-gray-400"> 15.26 ETH</p>
                  &nbsp;&nbsp;&nbsp;
                  <Rate isIncrement={false} rate="0.53%" />
                </div>
                <div className="flex items-start">
                  <p className="text-gray-400"> 24.33 BTC</p>
                  &nbsp;&nbsp;&nbsp;
                  <Rate isIncrement={true} rate="0.99%" />
                </div>
              </div>

              <div className="flex">
                <DropdownBtn label="Buy" />
                <DropdownBtn label="Exchange" />
                <DropdownBtn label="Gaming" />
                <DropdownBtn label="Earn Crypto" />
              </div>
            </div>

            <div className={styles.coinInfo}>
              <div>
                <div>
                  <small className={styles.title}>Market Cap</small>
                </div>
                <small>$731,935,983,865</small>
                <Rate isIncrement={true} rate="0.53%" />
              </div>

              <div className={styles.borderLeft}>
                <div>
                  <small className={styles.title}>
                    Fully Diluted Market Cap
                  </small>
                </div>
                <small>$811,236,224,810</small>
                <Rate isIncrement={true} rate="0.53%" />
              </div>

              <div className={styles.borderLeft}>
                <div>
                  <div>
                    <small className={styles.title}>
                      Volume &nbsp;<small className="coin-symbol"> BTC</small>{' '}
                    </small>
                  </div>
                  <small>$24,143,176,324</small>
                  <Rate isIncrement={true} rate="0.92%" />
                </div>
                <br />
                <div>
                  <div>
                    <small className={styles.title}>Volume / Market Cap</small>
                  </div>
                  <small>0.03315</small>
                </div>
              </div>

              <div className={styles.borderLeft}>
                <div>
                  <div>
                    <small className={styles.title}>Circulating Supply</small>
                  </div>
                  <small>18,983,850.00 BTC</small>
                </div>
                <br />
                <div>
                  <div className={styles.flexBetween}>
                    <div>
                      <small className={styles.title}>Max Supply</small>
                    </div>
                    <div>
                      <small>21,000,000</small>
                    </div>
                  </div>
                  <div className={styles.flexBetween}>
                    <div>
                      <small className={styles.title}>Total Supply</small>
                    </div>
                    <div>
                      <small>18,983,912</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CoinDetails
