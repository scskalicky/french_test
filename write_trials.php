<?php
// php to save individual close and ec trials.

// data file
$data = $_POST['full_data'];

// subject name
$subject = $_POST['subject'];

// folder
$folder = $_POST['subject_folder'];

// create filename AND FOLDER  
// folder should already exist from them making audio -- see save_audio.php
$name = "data/" . $folder . "/" . $subject . "_results.csv"; 

// write the file to disk
file_put_contents($name, $data);
?>