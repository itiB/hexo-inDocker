# itiblog

いちびのブログを作ろうと思ったときに静的サイトジェネレータでいいくね？ってなった

Nodejsを用いた静的サイトジェネレータHexoをDockerで実行してつくることで  
環境をきれいに保てるすばらしさである...

`Dockerfile`と`dokcer-compose.yml`を置いたディレクトリで以下を実行することでブログが作れる

```
$ docker-compose build
$ docker-compose run --rm node sh -c"hexo init hexo"
$ docker-compose up
```
