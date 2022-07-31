
jsPsych = initJsPsych()

var play_audio_button = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '',
    choices: ['PLAY AUDIO']
}

var record_response_button = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '',
  choices: ['RECORD RESPONSE']
}

var record_answer = {
    type: jsPsychHtmlAudioResponse,
    stimulus: 'RECORDING...',
    recording_duration: 5000,
    show_done_button: true,
    done_button_label: "Finish Recording",
    // save audio
    on_finish: function(data){
      purgeAudio(jsPsych.data.get().select('subject').values[0].Q0,jsPsych.data.get().last(3).values()[0].stimulus, data)
}}