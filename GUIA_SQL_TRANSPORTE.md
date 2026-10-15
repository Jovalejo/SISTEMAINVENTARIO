# 🚚 Script SQL: medio de entrega (moto / camioneta)

Cada venta guarda ahora cómo se entregó: **moto** o **camioneta**. Copia y pega este script en el SQL Editor de Supabase **antes** de desplegar esta versión; si no, el registro de ventas fallará porque la columna no existe.

```sql
ALTER TABLE ventas ADD COLUMN IF NOT EXISTS transporte TEXT
  CHECK (transporte IN ('moto', 'camioneta'));

CREATE INDEX IF NOT EXISTS idx_ventas_transporte ON ventas(transporte);
```

## 📝 Notas

- No borra datos. Las ventas anteriores quedan con `transporte` vacío y se muestran como "N/A".
- Las ventas nuevas exigen elegir moto o camioneta en el formulario.
- En **Ventas** y **Reportes** puedes filtrar por medio de entrega, y el PDF/Excel incluye la columna "entrega".
