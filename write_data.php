<?php
// get the data from the POST message

// data file
$data = $_POST['full_data'];

// subject name
$subject = $_POST['subject'];

// create filename
$name = "data/" . $subject . "/" . $subject . "_results.csv"; 

// write the file to disk
file_put_contents($name, $data);
?>