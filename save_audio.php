<?php
// grab the data from the post call

// audio base64
$data = $_POST['audio_base64'];

// audio fileid
$audio_id = $_POST['identifier'];

// subject
$subject = $_POST['sub'];

// create directory for subject
if (!is_dir('data/' . $subject)) {
    // dir doesn't exist, make it
    mkdir('data/' . $subject);
  }

// save the data as a .txt file to server with audio id
file_put_contents("data/" . $subject . '/' . $audio_id . ".txt", $data);
?>