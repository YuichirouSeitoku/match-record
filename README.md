# Match Record

### 競技かるたの試合の分析ができるWebサイト

競技かるたにおいて自分の得意な札がなんであるか、序盤は強いが終盤に弱い等の特徴が何かを確かめるために試合のデータをとって分析することはかなり重要なステップになります。従来は紙に記録をとって分析していたものをこのWebサービスを使えばスマホ一つで簡単にデータがとれるといったものになります。またそれに加えて自分がどの割合で攻守を行っているかも円グラフで確認できるようになっています。

### URL(heroku ver)
https://matchrecord.herokuapp.com/

### 使い方
Topページの「次の札を入力する」から札やおてつきの有無などの情報を入力します。入力する情報としては以下の5点になっています。

* なんの札が詠まれたか
* 出札か空札か
* どちらがとったか
* 攻めてとったか守ってとったか
* おてつきの有無

これらの入力が終わるとTopページに戻り、今まで入力した札の情報表に入力されます。
また下の分析ボタンを押すと、自分がとった札の中で守った札と攻めた札の割合が表示されるようになっています。

## 実行方法

```
npm run dev
```

## 環境構築

#### nodebrewのセットアップ
 
```
$ curl -L git.io/nodebrew | perl - setup
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile
$ source ~/.bash_profile
```

#### nodeのインストール

```
$ nodebrew install v13.13.0
$ nodebrew use v13.13.0
```

#### git clone

```
$ git clone https://github.com/YuichirouSeitoku/MatchRecord.git
$ cd MatchRecord
```

#### Vueの環境構築

```
$ npm -g install vue-cli
$ npm install --save webpack-cli
$ npm install --save webpack-dev-server
```
