#!/bin/sh -eu
# -*- coding: utf-8 -*-

cat << EOF
%#!lualatex
\documentclass[a4j]{ltjsarticle}
\usepackage{luatexja-fontspec}
\setmainfont[Ligatures=TeX]{TeXGyreTermes}
\setsansfont[Ligatures=TeX]{TeXGyreHeros}
\setmainjfont[BoldFont=IPAexGothic]{IPAexMincho}
\setsansjfont{IPAexGothic}
\newjfontfamily\jisninety[CJKShape=JIS1990]{IPAexMincho}
\usepackage{fancyhdr,listings,url,graphicx}
%\usepackage{amsmath,amssymb,amsfonts}
\renewcommand{\ttdefault}{pcr}

\lstset{
  basicstyle=\small\ttfamily,
  keywordstyle=\bfseries,
  stringstyle=\ttfamily,
  showstringspaces=false,
  frame=tb
}
\newcommand{\dlim}{\displaystyle\lim}
\pagestyle{fancy}
\voffset=-0.5in
\textheight=720pt
\lhead{p5.js入門}
\chead{}
\rhead{一般教養数理情報研究室 濱田龍義}
\lfoot{}
\cfoot{\thepage}
\rfoot{}
%\renewcommand{\footrulewidth}{0.3pt}
\setlength{\columnseprule}{0.1pt}
\begin{document}
\section{p5.js ソースコード}
本稿ではp5.jsと呼ばれるプログラミング環境を用いる．
p5.jsは，Processingに影響を受けて開発されたプログラミング環境である．
ProcessingはMITメディアラボのCasey ReasとBenjamin Fryによって設計された．
電子アートとビジュアルデザインのための言語と統合開発環境から構成される．
Processingやp5.jsで作られた作品については \url{openprocessing.org}
で閲覧できる．
Java言語と呼ばれるプログラミング言語を単純化し，グラッフィクに特化したものと思って良い．
プログラムをした内容がビジュアルに表現されるため，
初心者がプログラミングを学習するのに適していると言われている．
最近ではアーティストだけでなくデータサイエンティスト等にも人気があり，
巨大なデータの可視化等で活躍している
%\footnote{ただし，Processing単体ではなく，C, Java, Ruby, Python, R等と組み合わせて使うことが多い}．

p5.jsはLauren McCarthyによって開発されたJavaScriptライブラリである．
JavaScriptは，Java言語と名前は似ているが別のプログラミング言語である．
現在 Python と並んで，非常に人気のあるプログラミング言語で，
テキストエディタとWebブラウザだけで試すことができる．
つまり，「メモ帳」と「Internet Explorer」だけあれば，
自宅のパソコン等でも気軽に学習を進めることができる．
講義では「TeraPad」もしくは「Atom」というテキストエディタと，「Google Chrome」を推奨する．
本稿の各ソースコードはProcessing環境を対象とした教科書
「Processingをはじめよう第2版（現題:Getting Started with Processing, Casey Reas, Ben Fry著」（船田 巧訳）と，英語の書籍\`\`Getting Started with p5.js''(Lauren McCarthy, Casey Reas \& Ben Fry著) を参考にしている．
教科書を自分で読みながら，本稿を元にソースコードを入力し，参考にして欲しい．

\paragraph{実習に関する注意}
\begin{enumerate}
\item 実習に関係ない私語は慎むこと．ただし，実習に関連する相談は推奨する． 
\item 自分の頭で考え，自分の手で作業を行い，自分の言葉でノートにメモを取ること．
\item 初出のキーワードは書きだして確認すること．
\end{enumerate}

\paragraph{ソースコード入力における注意}
\begin{enumerate} 
\item 行の先頭は行番号なので入力しないこと．
\item 括弧の対応\verb|(...)|, \verb|{...}|, カンマ \verb|, | やセミコロン \verb|;|を忘れずに入力すること．
\item コードの色分けに注意すること．
\item 大文字と小文字の区別に注意すること．
\item インデント（行頭の空白）に注意して入力すること．
\item 文字間の空白についても統一を心がけること．
\item コンソールに表示される出力やエラーメッセージをよく読むこと．
\end{enumerate}

EOF

for file in *.js; do
  bname=`basename $file .js`
  texname=`echo $bname | sed -e 's/_/\\\_/g'`
  TMP=`mktemp -t genstart.sh.XXXXXX`
  trap "rm $TMP* 2>/dev/null" 0
  
  echo '\\begin{lstlisting}'"[caption=$texname.js]"
  cat $file | sed -e'/^$/d' | nl -b a -s ": "
  echo '\\end{lstlisting}'
  if [ -f image/$bname.pdf ]; then
    echo "\\includegraphics[height=3cm]{image/$bname.pdf}"
    else echo '\\vspace{1in}'
  fi
done

echo '\\end{document}'
