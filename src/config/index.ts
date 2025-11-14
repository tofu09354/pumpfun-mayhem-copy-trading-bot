import dotenv from 'dotenv';

dotenv.config();

export const config = {
  server: {
    port: parseInt(process.env.PORT || '3002', 10),
    nodeEnv: process.env.NODE_ENV || 'development',
  },
  solana: {
    rpcUrl: process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com',
    privateKey: process.env.SOLANA_PRIVATE_KEY || '',
    publicKey: process.env.SOLANA_PUBLIC_KEY || '',
  },
  copy: {
    enabled: process.env.COPY_ENABLED === 'true',
    targetWallets: process.env.TARGET_WALLETS?.split(',').filter(Boolean) || [],
    positionSizeMode: process.env.POSITION_SIZE_MODE || 'percentage',
    positionSizeValue: parseFloat(process.env.POSITION_SIZE_VALUE || '10'),
    maxPositionSize: parseFloat(process.env.MAX_POSITION_SIZE || '0.5'),
    executionDelayMs: parseInt(process.env.EXECUTION_DELAY_MS || '100', 10),
    maxDailyLoss: parseFloat(process.env.MAX_DAILY_LOSS || '2.0'),
    maxOpenPositions: parseInt(process.env.MAX_OPEN_POSITIONS || '10', 10),
    blacklistTokens: process.env.BLACKLIST_TOKENS?.split(',').filter(Boolean) || [],
    whitelistTokens: process.env.WHITELIST_TOKENS?.split(',').filter(Boolean) || [],
    minTradeSize: parseFloat(process.env.MIN_TRADE_SIZE || '0.01'),
    maxTradeSize: parseFloat(process.env.MAX_TRADE_SIZE || '10.0'),
    filterByToken: process.env.FILTER_BY_TOKEN === 'true',
    filterBySize: process.env.FILTER_BY_SIZE === 'true',
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    file: process.env.LOG_FILE || 'logs/copy-trading.log',
  },
};

