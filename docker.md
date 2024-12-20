tidb构建
```bash
docker-compose -f docker-compose-tikv.yml up -d
docker-compose -f docker-compose-pd.yml up -d
docker-compose -f docker-compose-tidb.yml up -d
mysql -h 127.0.0.1 -P 4000 -u root
```
```sql
ALTER USER 'root'@'%' IDENTIFIED BY 'tjf04712';
FLUSH PRIVILEGES;
exit;
```
```bash
mysql -h 127.0.0.1 -P 4000 -u root -p
```