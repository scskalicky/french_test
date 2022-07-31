
//var jsPsych = initJsPsych();
// creates a random audio id based on the username + date + random number
// pushes the audio data to server then overwrites audio data from the jsPsych data file
// one thing to think about is perhaps creating subfolders for each participant. 
function purgeAudio(subject, item, data){
    // create a random id for the specific audio file.
    // subject = jsPsych.data.get().select('subject')[0]
    audio_id = subject.concat('_').concat(item).concat('_').concat(Date.now().toString())
       console.log(audio_id);
       // call the php script
       $.ajax ({
            url: "save_audio.php",
            type: "POST",
            data: {audio_base64: data.response, identifier: audio_id, sub: subject},
            dataType: 'text'});
      // replace the base64 in the jsP data with the audio_id
     data.response = audio_id;
 }



// saves all jsPsych data to server at end of test
function saveData(name, data){
    $.ajax({
        url: 'write_data.php',
        type: 'POST',
        data: {full_data: data, subject: name},
        dataType: 'text'})

 //   var xhr = new XMLHttpRequest();
  //  xhr.open('POST', 'write_data.php');
  //  xhr.setRequestHeader('Content-Type', 'application/json');
  //  xhr.send(JSON.stringify({filedata: data}));
  }
  
