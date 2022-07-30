
// creates a random audio id based on the username + date + random number
// pushes the audio data to server then overwrites audio data from the jsPsych data file
// one thing to think about is perhaps creating subfolders for each participant. 

function purgeAudio(data){
    // create a random id for the specific audio file.
    audio_id = (id).toString().concat('_audio-').concat(Date.now().toString().concat('_').concat(Math.floor(Math.random()*9999)).toString())
       console.log(audio_id);
       // call the php script
       $.ajax ({
                         url: "save_audio.php",
                         type: "POST",
                         data: {audio_base64: data.response, identifier: audio_id},
             dataType: 'text',
           });
      // replace the base64 in the jsP data with the audio_id
     data.response = audio_id;
 }

