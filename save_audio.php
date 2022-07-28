<?php
// grab the data from the post call
$data = $_POST['audio_base64'];

// create a random audio id
$audio_id = uniqid("audio-");

// save the data as a .txt file to server with audio id
file_put_contents("data/" . $audio_id . ".txt", $data);

$audio_return['audio_id'] = $audio_id;
// echo the audio id back to jsPsych to be added to data as a replacement for the audio
echo json_encode($audio_return)
?>