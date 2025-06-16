### README.md – SQL & Index Optimization

#### Soal

Diberikan tabel `orders(order_id, user_id, total_amount, created_at)` dengan jumlah data mencapai 10 juta baris.

---

#### Query SQL

```sql
SELECT user_id, SUM(total_amount) AS total_spent
FROM orders
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY user_id;
```

---

#### Index Optimization

```sql
CREATE INDEX idx_orders_userid_createdat 
ON orders (user_id, created_at);
```

---