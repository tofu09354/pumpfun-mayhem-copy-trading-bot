export interface WalletTrade {
  wallet: string;
  tokenAddress: string;
  type: 'buy' | 'sell';
  amount: number;
  price: number;
  timestamp: number;
  txHash: string;
}

export interface CopiedTrade {
  originalWallet: string;
  originalTxHash: string;
  tokenAddress: string;
  type: 'buy' | 'sell';
  amount: number;
  price: number;
  timestamp: number;
  txHash?: string;
  success: boolean;
  error?: string;
}

export interface BotStatus {
  isRunning: boolean;
  monitoredWallets: number;
  totalCopiedTrades: number;
  successfulTrades: number;
  failedTrades: number;
  startTime: number;
}

