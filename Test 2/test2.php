<?php
$pemain = readline("");
$skor = readline("");
$permainan = readline("");
$skor2 = readline("");

$new_skor = [];
$ranking = [];

if (count(explode(" ", $skor)) > $pemain) {
    echo "Input melebihi batas"; 
    exit();
} else if (count(explode(" ", $skor)) < $pemain) {
    echo "Input kurang";
    exit();
}

if (count(explode(" ", $skor2)) > $permainan) {
    echo "Input melebihi batas";
    exit();
} else if (count(explode(" ", $skor2)) < $permainan) {
    echo "Input kurang";
    exit();
}

$asc_skor = array_unique(explode(" ", $skor), SORT_NUMERIC);
foreach ($asc_skor as $item) {
    array_push($new_skor, $item);
}

$skor2 = explode(" ", $skor2);
foreach($skor2 as $item) {
    if ($item > $new_skor[0]) {
        array_push($ranking, 1);
    } else if ($item < $new_skor[count($new_skor) - 1]) {
        array_push($ranking, count($new_skor) + 1);
    } else {
        for($i = 0; $i < count($new_skor); $i++) {
            if ($item >= $new_skor[$i]) {
                array_push($ranking, $i + 1 );
                break;
            }
        }
    }
    
}
foreach($ranking as $list){
    echo $list . " ";
}
