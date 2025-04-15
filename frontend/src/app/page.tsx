'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useContractRead, useContractWrite } from 'wagmi'
import { IPFSnfts } from '@/contracts/IPFSnfts'
import { useState } from 'react'

export default function Home() {
  const { address, isConnected } = useAccount()
  const [minting, setMinting] = useState(false)

  const { data: totalSupply } = useContractRead({
    address: '0x0000000000000000000000000000000000000000' as `0x${string}`,
    abi: IPFSnfts.abi,
    functionName: 's_tokenCounter',
  })

  const { write } = useContractWrite({
    address: '0x6895A2d6F6c465cB382b1009059CE03fA1244398' as `0x${string}`,
    abi: IPFSnfts.abi,
    functionName: 'mintNft',
    value: BigInt('100000000000000'), // 0.0001 ETH
  })

  const handleMint = async () => {
    if (!write) return
    setMinting(true)
    try {
      await write()
    } catch (error) {
      console.error('Minting failed:', error)
    }
    setMinting(false)
  }

  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-black">METABORONG</h1>
          <ConnectButton />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="brutal-card bg-white">
            <h2 className="text-2xl font-bold mb-4 text-black">About</h2>
            <p className="mb-4 text-black">
              METABORONG is a collection of 19 unique NFTs on Base. Each NFT is randomly assigned using Chainlink VRF.
            </p>
            <div className="space-y-2 text-black">
              <p>Total Supply: {totalSupply?.toString() || '0'} / 19</p>
              <p>Price: 0.0001 ETH</p>
            </div>
          </div>

          <div className="brutal-card bg-white">
            <h2 className="text-2xl font-bold mb-4 text-black">Mint</h2>
            {isConnected ? (
              <button
                onClick={handleMint}
                disabled={minting}
                className="brutal-button w-full bg-white text-black"
              >
                {minting ? 'Minting...' : 'Mint NFT'}
              </button>
            ) : (
              <p className="text-center text-black">Connect your wallet to mint</p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
