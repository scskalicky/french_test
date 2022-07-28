<?php

$data = $_POST['audio_base64'];
$audio_id = uniqid("audio-");

$name = 'data/{$audio_id}.txt';

file_put_contents($audio_id, $data);

echo $audio_id;
?>