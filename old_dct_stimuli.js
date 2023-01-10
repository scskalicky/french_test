var CA_timeline_stimuli = [
 
    /* 
    Define all the scenarios
    */
    
    {scenario_num: 'DCT1', scenario: 'You are sick and calling the health clinic to <b>make an appointment</b> with your doctor.<br>The new receptionist is very busy learning her new tasks.<br><br>Start the conversation by:<br>1. Greeting the receptionist.<br>2. Requesting an appointment for tomorrow.<br><br>', reminder: 'Reminder: You are sick and calling the health clinic to <b>make an appointment</b> with your doctor.<br>The new receptionist is very busy learning her new tasks.', turn1: 'audio/1_infirmiere_1_trim.mp3', turn2: 'audio/1_infirmiere_2_trim.mp3', turn3: 'audio/1_infirmiere_3_trim.mp3', data: {stim_id: 'DCT1'}},
    
      {scenario_num: 'DCT2',scenario: 'You need a ride to school for your exam. The exam is Tuesday at 9h.<br>You call your friend to <b>ask for a ride</b>. Your friend is very tired because he started a new job.<br><br> Start the conversation by:<br>1. Greeting your friend.<br>2. Requesting a ride for Tuesday at 9h.<br><br>', reminder: 'Reminder: You need a ride to school for your exam. The exam is Tuesday at 9h.<br>You call your friend to <b>ask for a ride</b>. Your friend is very tired because he started a new job.', turn1: 'audio/2_auto_1_trim.mp3', turn2: 'audio/2_auto_2_trim.mp3', turn3: 'audio/2_auto_3_trim.mp3', data: {stim_id: 'DCT2'}},
    
      {scenario_num: 'DCT3',scenario: 'You are taking a French class and you need to practice outside of class for your upcoming exam.<br>You call Madame Janine, a retired French teacher, <b>to ask if you can be her student</b>.<br>Madame Janine has a good reputation and has many students.<br><br>Start the conversation by:<br>1. Greeting Madame Janine.<br>2. Requesting an appointment for a first course.<br><br>', reminder: 'Reminder: You are taking a French class and you need to practice outside of class for your upcoming exam.<br>You call Madame Janine, a retired French teacher, <b>to ask if you can be her student</b>.<br>Madame Janine has a good reputation and has many students. ', turn1: 'audio/3_cours_1_trim.mp3', turn2: 'audio/3_cours_2_trim.mp3', turn3: 'audio/3_cours_3_trim.mp3', data:{stim_id: 'DCT3'}},
    
      {scenario_num: 'DCT4',scenario: 'Your brother\'s graduation is coming up next weekend. The cake company canceled your order.<br>You <b>ask your best friend to make a cake</b> for the party, but she is sick.<br><br>Start the conversation by:<br>1. Greeting your friend.<br>2. Requesting a cake.<br><br>', reminder: 'Reminder: Your brother\'s graduation is coming up next weekend. The cake company canceled your order.<br>You <b>ask your best friend to make a cake</b> for the party, but she is sick.', turn1: 'audio/4_gateau_1_trim.mp3', turn2: 'audio/4_gateau_2_trim.mp3', turn3: 'audio/4_gateau_3_trim.mp3', data:{stim_id: 'DCT4'}},
    
      {scenario_num: 'DCT5',scenario: 'You arrive late to your mid-term French exam because you missed the bus.<br><b>You apologize to your professor</b>, Monsieur Jean, for being late.<br>You know how much your teacher hates it!<br><br>Start the conversation by:<br>1. Greeting your teacher Monsieur Jean.<br>2. Apologizing for being late and telling him that you will not arrive late again.<br><br>', reminder: 'Reminder: You arrive late to your mid-term French exam because you missed the bus.<br><b>You apologize to your professor</b>, Monsieur Jean, for being late.<br>You know how much your teacher hates it!', turn1: 'audio/5_retard_1_trim.mp3', turn2: 'audio/5_retard_2_trim.mp3', turn3: 'audio/5_retard_3_trim.mp3', data:{stim_id: 'DCT5'}},
    ];


    // const CA_example = {
//   type: jsPsychHtmlButtonResponse,
//   stimulus: '<p class = "instructions"><b>Example</b><br>Below is an example (in English) demonstrating how you should complete these conversations. Please take a moment to study the example. You will be hearing and recording your own answers <b>in French</b> for each conversation in the same format as this example.</p>' +

//   '<p class = "instructions"><b>Scenario</b><br> You are working on a group project and one member did not finish her part. You call her to tell her that you are upset.</p>'

//   +
    
    
//     '<table><tr><th colspan = "2">Conversation Order</th><th colspan = "4">Example Conversation</th></tr>' +
    
//     '<tr><td colspan = "2"><span style = "color:red">1. Start the conversation</span></td><td colspan = "3"><span style = "color:red">(Example of what you might say)</span><br>Hey Michelle. You did not send me your part and I had to do it. You were supposed to send it last night.</td></tr>' +
    
//     '<tr><td colspan = "2">2. You will hear:</td><td colspan = "3">I\'m sorry. I got really sick, and couldn\'t finish it. What part should I do then?</td></tr>' +
    
//     '<tr><td colspan = "2"><span style = "color:red">3. Record your reply</span></td><td colspan = "3"><span style = "color:red">(Example of what you might say)</span><br>Can you please do the conclusion?</td></tr>' + 
    
//     '<tr><td colspan = "2">4. You will hear:</td><td colspan = "3">When should I send it?</td></tr>' +
    
//     '<tr><td colspan = "2"><span style = "color:red">5. Record your reply</span></td><td colspan = "3"><span style = "color:red">(Example of what you might say)</span><br>You should send it to me by tomorrow.</td></tr>' +
    
//     '<tr><td colspan = "2">6. You will hear:</td><td colspan = "3">Ok, will do!</td></tr>'
//     +
    
//     '<td colspan = "2"><span style = "color:red">Record your closing</span></td><td colspan = "3"><span style = "color:red">(Example of what you might say)</span><br>Great, thank you!</td></tr></table><br>',
//   choices: ["I'm Ready"]
// }