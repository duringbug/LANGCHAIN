import {connectToTiDB} from '../utils/mysql'

describe('MySQL Connection Test', () => {
    it('should connect to the TiDB server and execute a query', async () => {
      // 在测试前执行连接操作
      await expect(connectToTiDB()).resolves.not.toThrow();
    });
  });