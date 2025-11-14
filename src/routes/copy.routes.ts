import { Router, Request, Response } from 'express';
import { CopyTradingBot } from '../services/copy-trading.service';

const router = Router();
const copyBot = new CopyTradingBot();

router.get('/status', (req: Request, res: Response) => {
  try {
    const status = copyBot.getStatus();
    res.json({ success: true, data: status });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to get bot status' });
  }
});

router.post('/start', async (req: Request, res: Response) => {
  try {
    await copyBot.start();
    res.json({ success: true, message: 'Copy trading bot started' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to start bot' });
  }
});

router.post('/stop', (req: Request, res: Response) => {
  try {
    copyBot.stop();
    res.json({ success: true, message: 'Copy trading bot stopped' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to stop bot' });
  }
});

router.get('/trades', (req: Request, res: Response) => {
  try {
    const trades = copyBot.getTradeHistory();
    res.json({ success: true, data: trades });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to get trades' });
  }
});

export { router as copyRoutes };

