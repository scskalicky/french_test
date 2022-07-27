import base64
# how to convert base64 to audio

# recorded audio in base64 format
example = open('recorded_audio.txt').read()

# decode the string
decode_string = base64.b64decode(example)


# write to a wav
with open('test_wav.wav', 'wb') as w:
    w.write(decode_string)
  
type(decode_string)
# the wav is created but sucks. it has no headers(?)
# hi
import wave
wv = wave.open('test_wav.wav', 'r')
wv.readframes(len(decode_string))

wv = wave.open('test_wav.wav', 'w')
wv.setnchannels(2)
wv.setsampwidth(1)
wv.setnframes(len(decode_string))
wv.setframerate(441000)
wv.getparams()
# Hmmmmmm
wv.writeframes(decode_string)
wv.close()

wv = wave.open('myWave.wav', 'w')
#...Put sound data in 'data', taking into account channels...#

wv.writeframesraw(decode_string)
wv.close()





w = wave.open(decode_string)





w = wave.open('test_wav.wav', 'wb')
w.setparams((1,1,1,1, 'NONE', 'NONE'))



with wave.open('new_wave.wav', 'wb') as p:
    p.writeframes(w)

w.getparams()

with wave.open('test_wav.wav', 'rb') as w:
    w.setparams(1,1,1,1,'NONE', 'NONE')
    w.writeframes(decode_string)


with wave.open('test2.wav', 'rb') as w:
    w.getparams()


with wave.open('test2.wav', 'wb') as w:
    b.setnchannels(2)
    b.setsampwidth(2)
    b.getparams()
    w.writeframes(b)



with wave.open('test2.wav', 'wb') as w:
    w.setnchannels(2)
    w.setsampwidth(44100)
    w.getsampwidth()
    w.writeframes(decode_string)
    w.close()


wav_file.setnchannels(2)
wav_file.setsampwidth(44100)


wav_file.getnchannels()
wav_file.getparams()

dir(wav_file)




wav_file.writeframes(decode_string)



# mono vs. stereo
wav_file.setnchannels(1)

# bitrate 8bit/16bit
wav_file.setsampwidth(2)

# length
wav_file.setnframes(2)


wav_file.setparams((1, 2, 48000, 0, 'NONE', 'NONE'))


wav_file.writeframes(decode_string)









with open(webmfile, 'wb') as file:
       file.write(decode_string)

# can i see how long webmfiles are???

b = open('test.webm')
b

from ffmpy import FFmpeg


ff = FFmpeg(
        executable = '/Users/sskalicky/cloudstor/duolingo_grant_test/ffmpeg',
        inputs={decode_string : None},
        outputs = {'test.mp3' : None})
ff.cmd
ff.run()




import os
os.getcwd()


# save to a .wav, but doesn't have length etc. 
t = open('wav1.wav', 'wb')
t.write(decode_string)









wave_file = 'wave_file.wav'
webm_file = pmc.open('webm_file.webm')

with open(webmfile , 'wb') as wm:
    wm.write(decode_string)



with open(webmfile, 'rb') as wm:
    webmdata = pcm.read()
with open(wavfile, 'wb') as file:
        file.write(webmdata







# https://stackoverflow.com/questions/64247221/how-to-decode-base64-to-wav-format-using-python
# convert to webmfile (for some reason)
webmfile = ('test' + ".webm")

with open(webmfile, 'wb') as file:
    file.write(decode_string)

# thenuse FFmpeg to write to mps3
from ffmpy import FFmpeg


ff = FFmpeg(
        executable = 'C:/Program Files/ffmpeg-2020/bin/ffmpeg.exe',
        inputs={file:None},
        outputs = {outfile:'-c:a pcm_f32le'})
ff.cmd
ff.run()

import io
from pydub import AudioSegment

s = io.BytesIO(decode_string)
audio = AudioSegment.from_raw(s, sample_width, frame_rate, channels).export(filename, format='wav')
