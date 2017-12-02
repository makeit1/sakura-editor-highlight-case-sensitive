## 概要

サクラエディタのマクロ「ダブルクリックして選択範囲と同じ単語をハイライト」に、英大文字と小文字を区別する機能を追加しました。

* highlight_caseSensitive.js - 大文字と小文字を区別します
* highlight_caseInsensitive.js - 大文字と小文字を区別しません

## 引用元

Macro/投稿/116 - SakuraEditorWiki  
http://sakura.qp.land.to/?Macro%2F%C5%EA%B9%C6%2F116

## 設定方法

1. jsファイルを任意のフォルダに保存
1. サクラエディタを起動
1. 設定 → 共通設定 → マクロ
1. マクロ一覧に下記を追加
    * マクロ1
      * マクロ名：highlighe_caseSensitive
      * ファイル名：highlight_caseSensitive.js
    * マクロ2
      * マクロ名：highlighe_caseInsensitive
      * ファイル名：highlighe_caseInsensitive.js
1. 設定 → 共通設定 → キー割り当て
1. 外部マクロにて、以下のキーを割り当て
    * highlight_caseSensitive：ダブルクリック
    * highlight_caseInsensitive：Shift+ダブルクリック

## 使用方法

* ダブルクリックで単語を選択すると、大文字と小文字を区別して同じ単語がハイライトされます。
* Shift+ダブルクリックで単語を選択すると、大文字と小文字を区別せず同じ単語がハイライトされます。
* 行末でダブルクリックすると、ハイライトが消えます。
* Ctrl+クリックすると、ダブルクリックで選択される対象を事前に確認できます。これは、サクラエディタの標準動作で、本マクロとは無関係です。

## 副作用

いずれかのマクロにより単語がハイライトされると、検索ダイアログの設定が以下のように変更されます。
* 単語単位で探す：OFF
* 英大文字と小文字を区別する：ON (マクロ1の場合) / OFF (マクロ2の場合)
* 正規表現：OFF
* 見つからないときにメッセージを表示：OFF
* 検索ダイアログを自動的に閉じる：OFF
* 先頭（末尾）から再検索する：ON
