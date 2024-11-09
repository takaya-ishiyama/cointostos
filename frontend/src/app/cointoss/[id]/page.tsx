'use client'
import * as coinConsts from '@/consts/coin'
import React from 'react'

export default function CoinToss() {
  const [coin, setCoin] = React.useState<coinConsts.FrontAndBack | undefined>(undefined)

  const handleClickCointoss = React.useCallback(() => {
    const randomeZeroOrOne = getRandomInt(2)
    switch (randomeZeroOrOne) {
      case 0: {
        setCoin(coinConsts.frontAndBack.front)
        break
      }
      case 1: {
        setCoin(coinConsts.frontAndBack.back)
        break
      }
    }
  }, [])

  const handleReset = React.useCallback(() => {
    setCoin(undefined)
  }, [])

  return (
    <div>
      <div >
        <button onClick={handleClickCointoss} >
          コイントス
        </button>

        <div>
          <button onClick={handleReset} >
            リセット
          </button>
        </div>
      </div>
      <div>
        {`結果 : ${coin ?? 'まだコイントスをしていません'}`}
      </div>
    </div>
  )
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
