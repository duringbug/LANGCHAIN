import * as mysql from 'mysql2';

export const connectToTiDB = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // 创建一个连接池
    const connection = mysql.createConnection({
      host: '127.0.0.1',  // TiDB 的主机地址
      port: 4000,         // TiDB 的端口号
      user: 'root',       // MySQL 用户名
      password: 'tjf04712',  // 你设置的 root 用户密码
      database: 'test',   // 默认数据库（可以根据需要修改）
    });

    // 测试连接
    connection.connect((err) => {
      if (err) {
        console.error('连接失败: ' + err.stack);
        reject(err);  // 如果连接失败，则返回错误
      } else {
        console.log('已连接到 TiDB，连接 ID: ' + connection.threadId);
        // 执行查询
        connection.query('SELECT 1 + 1 AS solution', (err, results) => {
          if (err) {
            console.error('查询失败: ' + err.stack);
            reject(err);  // 如果查询失败，则返回错误
          } else {
            console.log('查询结果: ', results);
            resolve();  // 查询成功，返回成功
          }
          connection.end();  // 确保关闭连接
        });
      }
    });
  });
};
