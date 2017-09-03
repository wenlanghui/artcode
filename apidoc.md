# 统一说明

## 接口返回数据格式

格式：

field   | description
--------|---------------
success | 调用是否成功
---     | 以上 接口描述字段，以下为 数据字段
count   | 数据总数，需要时会返回此字段，字段名可变更
docs    | 数据字段，数据字段各个接口可能不同，`docs`仅为示例

成功示例：
```json
{
    "success": true,
}
```
成功示例：
```json
{
    "docs": [{},{}],
    "count": 2
}
```

失败示例：
```json
{
  "success": false,
}
```