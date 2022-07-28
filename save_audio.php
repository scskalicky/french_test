<?php

$data = $_POST['audio_base64'];
$audio_id = uniqid("audio-");

$name = "data/{$audio_id}.txt";

file_put_contents("data/" . $audio_id . ".txt", $data);

echo json_encode($audio_id);
?>