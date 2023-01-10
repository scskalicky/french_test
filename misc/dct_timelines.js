
var wtf = 'hi'



var new_scenario = 


timeline_a = [
  {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'You are about to begin a new scenario.<br><br>',
    choices: ['Begin Scenario']
  }
  

]


var timeline_b = [
    {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'You are about to begin a new scenario.<br><br>',
    choices: ['Begin Scenario']
    },
  
  {
    type: jsPsychImageButtonResponse,
    stimulus: jsPsych.timelineVariable('image_one'),
    stimulus_height: '400',
    choices: ['Start your conversation...']
  },
  
  
    // participant first recording
  {
      type: jsPsychHtmlAudioResponse,
      on_start: function(trial){
        trial.stimulus = '<img src = "'.concat(jsPsych.timelineVariable('image_two')).concat('"height = "400" img><p style = color:red"><b>RECORDING</b><br><span id = "clock" style = "color:red">-:--</span></p><br>')
      },
      stimulus: '',
      recording_duration: dct_response_time_max,
      show_done_button: true,
      data: jsPsych.timelineVariable("data"),
      done_button_label: 'Finish Recording',
      // countdown timers
      on_load: function(){
        countdown_timer(dct_response_time_max)
      },
  
      // save audio
      on_finish: function(data){
        data.stim_id = jsPsych.timelineVariable('scenario_num').concat('_recording1')
        purgeAudio(jsPsych.data.get().select('subject').values[0],
        // audio file name
        jsPsych.timelineVariable('scenario_num').concat('_recording1_'),
        data)}},
  
  
  { // first response to participant
      timeline: [{
        type: jsPsychAudioButtonResponse,
        stimulus: jsPsych.timelineVariable('audio_one'),
        prompt: '',
        choices: ['Play one more time', 'Continue'],
        response_allowed_while_playing: false,
        on_start: function(trial){
          console.log(jsPsych.data.getLastTrialData().values()[0].trial_type)
          trial.prompt = '<img src = "'.concat(jsPsych.timelineVariable('image_three')).concat('" height = "400" img>')
          if(jsPsych.data.getLastTrialData().values()[0].trial_type == 'html-audio-response'){
            trial.choices = ['Play one more time', 'Continue']
          } else {
            trial.choices = ['Continue']
          }
        },
        on_finish: function(data){
          data.stim_id = jsPsych.timelineVariable('scenario_num').concat('_listening1')},
      }], 
  
      loop_function: function(data){
        // check what previous trial was to determine if trial can be replayed
        if(data.values()[0].response == 0 && jsPsych.data.get().last(2).values()[0].trial_type == 'html-audio-response'){
            return true; // loop again!
        } else {
            return false; // continue
        }
      }
    },
  
    // participants record response or ask question depending on the DCT scenario
    {
      type: jsPsychHtmlAudioResponse,
      on_start: function(trial){
        trial.stimulus = '<img src = "'.concat(jsPsych.timelineVariable('image_four')).concat('" height = "400" img><p style = "color:red"><b>RECORDING</b><br><span id = "clock" style = "color:red">-:--</span></p><br>')
      },
      stimulus: '',
      recording_duration: dct_response_time_max,
      show_done_button: true,
      data: jsPsych.timelineVariable("data"),
      done_button_label: "Finish Recording",
      // countdown timers
      on_load: function(){
        countdown_timer(dct_response_time_max)},
  
      // save audio
      on_finish: function(data){
        data.stim_id = jsPsych.timelineVariable('scenario_num').concat('_recording2')
        console.log(jsPsych.data.get().select('subject').values[0])
          //subject name
        purgeAudio(jsPsych.data.get().select('subject').values[0],
        // audio file name
        jsPsych.timelineVariable('scenario_num').concat('_recording2_'),
        data)
  }},
      
  
  { // second response to participant
      timeline: [{
        type: jsPsychAudioButtonResponse,
        stimulus: jsPsych.timelineVariable('audio_two'),
        prompt: '',
        choices: ['Play one more time', 'Continue'],
        response_allowed_while_playing: false,
        on_start: function(trial){
          console.log(jsPsych.data.getLastTrialData().values()[0].trial_type)
          trial.prompt = '<img src = "'.concat(jsPsych.timelineVariable('image_five')).concat('" height = "400" img>')
          if(jsPsych.data.getLastTrialData().values()[0].trial_type == 'html-audio-response'){
            trial.choices = ['Play one more time', 'Continue']
          } else {
            trial.choices = ['Continue']
          }
        },
        on_finish: function(data){
          data.stim_id = jsPsych.timelineVariable('scenario_num').concat('_listening2')},
      }],   
  
  
      loop_function: function(data){
        // check what previous trial was to determine if trial can be replayed
        if(data.values()[0].response == 0 && jsPsych.data.get().last(2).values()[0].trial_type == 'html-audio-response'){
            return true; // loop again!
        } else {
            return false; // continue
        }
      }
    },
  
    // participants record response or ask question depending on the DCT scenario
    {
      type: jsPsychHtmlAudioResponse,
      on_start: function(trial){
        trial.stimulus = '<img src = "'.concat(jsPsych.timelineVariable('image_six')).concat('" height = "400" img><p style = "color:red"><b>RECORDING</b><br><span id = "clock" style = "color:red">-:--</span></p><br>')
      },
      stimulus: '',
      recording_duration: dct_response_time_max,
      show_done_button: true,
      data: jsPsych.timelineVariable("data"),
      done_button_label: "Finish Recording",
      // countdown timers
      on_load: function(){
        countdown_timer(dct_response_time_max)},
  
      // save audio
      on_finish: function(data){
        data.stim_id = jsPsych.timelineVariable('scenario_num').concat('_recording3')
        console.log(jsPsych.data.get().select('subject').values[0])
          //subject name
        purgeAudio(jsPsych.data.get().select('subject').values[0],
        // audio file name
        jsPsych.timelineVariable('scenario_num').concat('_recording3_'),
        data)
  }},
  
  
  { // third response to participant
      timeline: [{
        type: jsPsychAudioButtonResponse,
        stimulus: jsPsych.timelineVariable('audio_three'),
        prompt: '',
        choices: ['Play one more time', 'Continue'],
        response_allowed_while_playing: false,
        on_start: function(trial){
          console.log(jsPsych.data.getLastTrialData().values()[0].trial_type)
          trial.prompt = '<img src = "'.concat(jsPsych.timelineVariable('image_seven')).concat('" height = "400" img>')
          if(jsPsych.data.getLastTrialData().values()[0].trial_type == 'html-audio-response'){
            trial.choices = ['Play one more time', 'Continue']
          } else {
            trial.choices = ['Continue']
          }
        },
        on_finish: function(data){
          data.stim_id = jsPsych.timelineVariable('scenario_num').concat('_listening3')},
      }],   
  
  
      loop_function: function(data){
        // check what previous trial was to determine if trial can be replayed
        if(data.values()[0].response == 0 && jsPsych.data.get().last(2).values()[0].trial_type == 'html-audio-response'){
            return true; // loop again!
        } else {
            return false; // continue
        }
      }
    },
  
  // participants record response or ask question depending on the DCT scenario
  {
      type: jsPsychHtmlAudioResponse,
      on_start: function(trial){
        trial.stimulus = '<img src = "'.concat(jsPsych.timelineVariable('image_eight')).concat('" height = "400" img><p style = "color:red"><b>RECORDING</b><br><span id = "clock" style = "color:red">-:--</span></p><br>')
      },
      stimulus: '',
      recording_duration: dct_response_time_max,
      show_done_button: true,
      data: jsPsych.timelineVariable("data"),
      done_button_label: "Finish Recording",
      // countdown timers
      on_load: function(){
        countdown_timer(dct_response_time_max)},
  
      // save audio
      on_finish: function(data){
        data.stim_id = jsPsych.timelineVariable('scenario_num').concat('_recording4')
        console.log(jsPsych.data.get().select('subject').values[0])
          //subject name
        purgeAudio(jsPsych.data.get().select('subject').values[0],
        // audio file name
        jsPsych.timelineVariable('scenario_num').concat('_recording4'),
        data)
  }},
  
  // participants record response or ask question depending on the DCT scenario
  {
      type: jsPsychHtmlAudioResponse,
      on_start: function(trial){
        trial.stimulus = '<img src = "'.concat(jsPsych.timelineVariable('image_nine')).concat('" height = "400" img><p style = "color:red"><b>RECORDING</b><br><span id = "clock" style = "color:red">-:--</span></p><br>')
      },
      stimulus: '',
      recording_duration: dct_response_time_max,
      show_done_button: true,
      data: jsPsych.timelineVariable("data"),
      done_button_label: "Finish Recording",
      // countdown timers
      on_load: function(){
        countdown_timer(dct_response_time_max)},
  
      // save audio
      on_finish: function(data){
        data.stim_id = jsPsych.timelineVariable('scenario_num').concat('_recording5')
        console.log(jsPsych.data.get().select('subject').values[0])
          //subject name
        purgeAudio(jsPsych.data.get().select('subject').values[0],
        // audio file name
        jsPsych.timelineVariable('scenario_num').concat('_recording5'),
        data)
  }},
  
    {type: jsPsychHtmlKeyboardResponse,
    stimulus: "Loading next scenario...",
    trial_duration: 2500,
    choices: "NO_KEYS"
    }
   ]


