# NOTHING MAKES SENSE

But has it ever?

## [See it here](https://instagram.com/lorossi97)

## Background

I have always admired the Italian artist [Marinetti](https://en.wikipedia.org/wiki/Filippo_Tommaso_Marinetti) (of course not for his political stance, but for his artistic creations).

He "played" around a lot with text and shapes, and he could create unique artistic pieces by bending words around and printing them in ways that before him weren't even considered art.

I would say that in order to make this animation I got inspired by his work, but that would be way too prentious. Let's just say that I liked the concept of an hypnotic text moving around.

Is it good? You'll judge.

## Details

Font used: [Hack](https://sourcefoundry.org/hack/)
FFmpeg command used: `ffmpeg -y -r 60 -i frame-%06d.png -c:a aac -b:a 256k -ar 44100 -c:v libx264 -pix_fmt yuv420p -r 60 video_h264.mp4`
