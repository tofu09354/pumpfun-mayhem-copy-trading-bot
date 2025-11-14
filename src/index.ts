import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { logger } from './utils/logger';
import { errorHandler } from './middleware/errorHandler';
import { copyRoutes } from './routes/copy.routes';
import { healthRoutes } from './routes/health.routes';
import { CopyTradingBot } from './services/copy-trading.service';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/health', healthRoutes);
app.use('/api/copy', copyRoutes);

app.use(errorHandler);

const copyBot = new CopyTradingBot();

app.listen(PORT, () => {
  logger.info(`📋 Copy Trading Bot server running on port ${PORT}`);
  
  if (process.env.COPY_ENABLED === 'true') {
    copyBot.start().catch((error) => {
      logger.error('Failed to start copy trading bot:', error);
    });
  }
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  copyBot.stop();
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully');
  copyBot.stop();
  process.exit(0);
});

export default app;

