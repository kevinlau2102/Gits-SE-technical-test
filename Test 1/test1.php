<?php
$input = readline("Input ");
$result = [];
for ($i = 0; $i < $input; $i++) {
    $temp = (($i*($i + 1))/2)+1;
    array_push($result, $temp);
}
echo "Output : " . join("-", $result);
?>