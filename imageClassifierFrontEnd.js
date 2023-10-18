{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red202\green202\blue202;\red70\green137\blue204;\red23\green23\blue23;
\red212\green214\blue154;\red140\green211\blue254;\red194\green126\blue101;\red196\green83\blue86;\red205\green173\blue106;
\red203\green139\blue114;\red183\green111\blue179;}
{\*\expandedcolortbl;;\cssrgb\c83137\c83137\c83137;\cssrgb\c33725\c61176\c83922;\cssrgb\c11765\c11765\c11765;
\cssrgb\c86275\c86275\c66667;\cssrgb\c61176\c86275\c99608;\cssrgb\c80784\c56863\c47059;\cssrgb\c81961\c41176\c41176;\cssrgb\c84314\c72941\c49020;
\cssrgb\c83922\c61569\c52157;\cssrgb\c77255\c52549\c75294;}
\paperw11900\paperh16840\margl1440\margr1440\vieww27700\viewh10580\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs36 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 async\cf2 \strokec2  \cf3 \strokec3 function\cf2 \strokec2  \cf5 \strokec5 classifyImage\cf2 \strokec2 (\cf6 \strokec6 dataURL\cf2 \strokec2 ) \{\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb4     \cf3 \strokec3 var\cf2 \strokec2  \cf6 \strokec6 base64ImageEncoded\cf2 \strokec2  = \cf6 \strokec6 dataURL\cf2 \strokec2 .\cf5 \strokec5 replace\cf2 \strokec2 (\cf7 \strokec7 'data:'\cf2 \strokec2 , \cf7 \strokec7 ''\cf2 \strokec2 ).\cf5 \strokec5 replace\cf2 \strokec2 (\cf7 \strokec7 /\cf5 \strokec5 ^\cf8 \strokec8 .\cf9 \strokec9 +\cf10 \strokec10 ,\cf7 \strokec7 /\cf2 \strokec2 , \cf7 \strokec7 ''\cf2 \strokec2 );\cb1 \
\cb4     \cb1 \
\cb4     \cf3 \strokec3 var\cf2 \strokec2  \cf6 \strokec6 data\cf2 \strokec2  = \{\cb1 \
\cb4         \cf7 \strokec7 'input'\cf2 \strokec2 : \cf6 \strokec6 base64ImageEncoded\cf2 \strokec2  \cb1 \
\cb4     \};\cb1 \
\
\cb4     \cf3 \strokec3 const\cf2 \strokec2  response = \cf11 \strokec11 await\cf2 \strokec2  \cf5 \strokec5 fetch\cf2 \strokec2 (\cb1 \
\cb4         \cf7 \strokec7 \'93A\'94PI GATEWAY END POINT GOES HERE\cf2 \strokec2 ,\cb1 \
\cb4         \{\cb1 \
\cb4             method: \cf7 \strokec7 "POST"\cf2 \strokec2 ,\cb1 \
\cb4             body: \cf6 \strokec6 JSON\cf2 \strokec2 .\cf5 \strokec5 stringify\cf2 \strokec2 (\cf6 \strokec6 data\cf2 \strokec2 )\cb1 \
\cb4         \});\cb1 \
\
\cb4     \cf3 \strokec3 const\cf2 \strokec2  labels = [\cf7 \strokec7 'unclassified'\cf2 \strokec2 , \cf7 \strokec7 'up'\cf2 \strokec2 , \cf7 \strokec7 'down'\cf2 \strokec2 ];\cb1 \
\cb4     \cf3 \strokec3 const\cf2 \strokec2  json = \cf11 \strokec11 await\cf2 \strokec2  response.\cf5 \strokec5 json\cf2 \strokec2 ();\cb1 \
\cb4     \cf3 \strokec3 let\cf2 \strokec2  \cf6 \strokec6 prediction\cf2 \strokec2  = \cf3 \strokec3 null\cf2 \strokec2 ;\cb1 \
\
\cb4     \cf11 \strokec11 if\cf2 \strokec2  (json.body) \{\cb1 \
\cb4         \cf3 \strokec3 let\cf2 \strokec2  \cf6 \strokec6 maxIndex\cf2 \strokec2  = \cf5 \strokec5 parseInt\cf2 \strokec2 (json.\cf6 \strokec6 body\cf2 \strokec2 .maxIndex);\cb1 \
\cb4         \cf6 \strokec6 prediction\cf2 \strokec2  = labels[\cf6 \strokec6 maxIndex\cf2 \strokec2 ];       \cb1 \
\cb4     \}\cb1 \
\
\cb4     \cf11 \strokec11 return\cf2 \strokec2  \cf6 \strokec6 prediction\cf2 \strokec2 ;\cb1 \
\cb4 \}\cb1 \
\
\
\
}