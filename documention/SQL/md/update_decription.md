# Erklärung des `UPDATE`-Befehls mit Reihenfolge

Die Reihenfolge, in der die verschiedenen Teile eines SQL-Statements verarbeitet werden, ist wichtig zu verstehen. Lass uns den Ablauf des `UPDATE`-Befehls Schritt für Schritt durchgehen, um Klarheit zu schaffen:

## Ablauf des `UPDATE`-Befehls

1. **Initialisieren des Updates**:

   - Zunächst wird die Tabelle `Descriptions` zur Verarbeitung des Updates ausgewählt.

   ```sql
   UPDATE Descriptions
   ```

2. **Auswahl der zu aktualisierenden Zeilen:**

   - Die `WHERE`-Klausel bestimmt, welche Zeilen aktualisiert werden sollen. Diese Filterung geschieht direkt nach der Auswahl der Tabelle und vor der Sortierung.

   ```sql
   WHERE skill_id = @skill_id AND description_order >= @new_order
   ```

3. **Sortieren der ausgewählten Zeilen:**

   - Sobald die Zeilen durch die `WHERE`-Klausel gefiltert wurden, werden sie gemäß der `ORDER BY`-Klausel sortiert. Diese Sortierung bestimmt die Reihenfolge, in der die Zeilen aktualisiert werden.

   ```sql
   ORDER BY description_order DESC;
   ```

4. **Ausführen der Aktualisierung:**

   - Nachdem die relevanten Zeilen gefiltert und sortiert wurden, wird die Aktualisierung gemäß der `SET`-Klausel durchgeführt.

   ```sql
   SET description_order = description_order + 1
   ```

# Zusammenfassung des Ablaufs

1. **Filterung:**

   - Zunächst filtert die `WHERE`-Klausel die Zeilen, die den Bedingungen `skill_id = @skill_id` und `description_order >= @new_order` entsprechen.

   ```sql
   WHERE skill_id = @skill_id AND description_order >= @new_order
   ```

2. **Sortierung:**

   - Die gefilterten Zeilen werden dann gemäß der `ORDER BY`-Klausel in absteigender Reihenfolge nach `description_order` sortiert.

   ```sql
   ORDER BY description_order DESC;
   ```

3. **Aktualisierung:**

   - Schließlich wird die `SET`-Klausel angewendet, um die description_order-Werte der gefilterten und sortierten Zeilen um 1 zu erhöhen.

   ```sql
   SET description_order = description_order + 1
   ```

# Beispiel

Angenommen, du hast folgende Zeilen in der Tabelle Descriptions:

| description_id | skill_id | description_order |
| -------------- | -------- | ----------------- |
| 1              | 1        | 1                 |
| 2              | 1        | 2                 |
| 3              | 1        | 3                 |

# SQL-Befehl

Angenommen, `@skill_id` ist 1 und `@new_order` ist 2:

```sql
UPDATE Descriptions
SET description_order = description_order + 1
WHERE skill_id = @skill_id AND description_order >= @new_order
ORDER BY description_order DESC;
```

# Ablauf des `UPDATE`-Befehls in `SQL`

## Filterung

Es werden nur die Zeilen ausgewählt, die `skill_id = 1` und `description_order >= 2` erfüllen:

| description_id | skill_id | description_order |
| -------------- | -------- | ----------------- |
| 2              | 1        | 2                 |
| 3              | 1        | 3                 |

## Sortierung

Diese Zeilen werden in absteigender Reihenfolge nach `description_order` sortiert:

| description_id | skill_id | description_order |
| -------------- | -------- | ----------------- |
| 3              | 1        | 3                 |
| 2              | 1        | 2                 |

## Aktualisierung

Die `description_order`-Werte werden um 1 erhöht:

| description_id | skill_id | description_order (vorher) | description_order (nachher) |
| -------------- | -------- | -------------------------- | --------------------------- |
| 3              | 1        | 3                          | 4                           |
| 2              | 1        | 2                          | 3                           |

## Nach dem Update

Nach dem Update sieht die Tabelle so aus:

| description_id | skill_id | description_order |
| -------------- | -------- | ----------------- |
| 1              | 1        | 1                 |
| 2              | 1        | 3                 |
| 3              | 1        | 4                 |

Diese Reihenfolge der Verarbeitung stellt sicher, dass es keine Konflikte mit doppelten Werten gibt, und die Aktualisierung erfolgt korrekt.
