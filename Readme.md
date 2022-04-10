# express_chat_app
JavaScriptで作られた簡易リアルタイムチャットアプリ(Webアプリ)です。
CSSフレームワークには「Buluma」、Node.jsのモジュールは「Express」「socket.io」「nodemon」を使用しています。

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?logo=JavaScript&style=flat&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-6DA55F.svg?logo=node.js&style=flat&logoColor=white)

![Image 1](https://yuuronacademy.com/wp-content/uploads/2022/04/app1_1.jpg)

## 環境構築・実行
Node.jsの実行環境を用意した後に、このリポジトリを各自のPCの適切な場所にクローンしてください。
このプロジェクトのフォルダに移動したのち以下コマンドを使用してモジュールをインストールしてください。

```bash
npm install express

npm install socket.io
```

またnodemonをインストールしていない場合は以下のコマンドでグローバルインストール可能です。
```bash
npm install nodemon
```

次のコマンドでサーバを立ち上げ可能です。
```bash
npm run dev
```

上記コマンドを入力したらブラウザで「localhost:3000」にアクセスしてください。
立ち上げたサーバは「ctrl+c」を2回押すことで停止できます。