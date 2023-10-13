import React from 'react';

const Dashboard = () => {
    return (
        <div className="bg-purple-900 p-8 text-white h-screen">
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">Welcome to Interlay</h1>
                <p>
                    Interlay is a one-stop shop for Bitcoin DeFi: swaps, lending, staking, and 1-click strategies. 
                    IBTC is trustless multi-chain Bitcoin, secured by collateral, cryptography, and a decentralized vault network.
                </p>
                <div className="mt-4 flex space-x-4">
                    <button className="bg-white text-purple-900 py-2 px-4 rounded">Whitepaper</button>
                    <button className="bg-white text-purple-900 py-2 px-4 rounded">Fund Wallet Guide</button>
                    <button className="bg-purple-700 py-2 px-4 rounded">Tutorial</button>
                </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg text-purple-900 mb-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                        <div className="bg-purple-900 p-3 rounded-full">
                            {/* Replace with your icon or image */}
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Account 1</h2>
                            <p className="truncate">wdDDLK...hAUbfZi</p>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <button className="text-purple-900">📋</button>
                        <button className="text-purple-900">🔗</button>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-gray-600 mb-1">Total Balance</h3>
                        <p className="text-lg font-bold">$0.00</p>
                    </div>
                    <div>
                        <h3 className="text-gray-600 mb-1">Transferable Balance</h3>
                        <p className="text-lg font-bold">$0.00</p>
                    </div>
                </div>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold mb-4">Available assets</h2>
                <div className="bg-white p-4 rounded-lg space-y-4">
                    {[["DOT", "$3.69"], ["IBTC", "$26,808.71"], ["INTR", "$0.010"], ["USDT", "$1.00"]].map((asset, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <div className="bg-purple-600 w-10 h-10 rounded-full">
                                    {/* Replace with asset logo */}
                                </div>
                                <span>{asset[0]}</span>
                            </div>
                            <span className="text-lg font-bold">{asset[1]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
