// let jsPsych = initJsPsych()

const play_audio_button = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '',
    choices: ['PLAY AUDIO']
}

const record_response_button = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '',
  choices: ['RECORD RESPONSE']
}

const record_answer = {
    type: jsPsychHtmlAudioResponse,
    stimulus: 'RECORDING...',
    recording_duration: 5000,
    show_done_button: true,
    done_button_label: "Finish Recording",
    // save audio
    on_finish: function(data){
        //subject name
      purgeAudio(jsPsych.data.get().select('subject').values[0].Q0,
      // audio file name
      jsPsych.data.get().last(3).values()[0].stimulus, 
      // current js data object
      data)
}}

