<?php
$post_data = json_decode(file_get_contents('php://input'), true);
$data = $post_data['audio_base64'];
$audio_id = uniqid("audio-");
$name = 'data/{$audio_id}.txt';
file_put_contents($name, $data)
echo $audio_id;
?>