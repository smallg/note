### 跨域相关
```markdown
‘Access-Control-Allow-Origin': '*' 允许跨域
'Access-Control-Allow-Headers': 'Custom-defined-headers' 允许跨域的自定义头
'Access-Control-Allow-Methods’：‘POST, PUT, DELETE' 允许跨域的方法
'Access-Control-Max-Age': '1000'  1000秒内第二次请求不需要预请求`
```
###缓存相关
1. public  任何都可以
2. private 只有发起请求的才可以缓存
3. no-cache 可以存，但需要服务器验证才能使用缓存，例如Cache-Control: 'max-age=2000, no-cache'
4. max-age = <seconds>  多少秒过期
5. s-maxage = <seconds> 针对代理服务器缓存
6. max-stale = <seconds> 发起请求方在时间内可以使用过期的缓存，非浏览器
7. must-revalidate 访问时先验证是否过期
8. proxy-revalidate 针对缓存服务器
9. no-store 不存
10. Last-odified 上次修改时间，配合if-modified-since或者if-unmodified-since使用，对比修改时间，来判断能否使用缓存。
11. Etag 数据签名，对内容产生唯一签名，任何修改都会产生不同的签名，类似hash值标记，配合if-match或者if-none-match，来判断是否使用缓存



