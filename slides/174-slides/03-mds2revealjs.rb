
system ("pandoc -t revealjs -s -o myslides.html stitched.md -V revealjs-url=https://revealjs.com -V theme=white -V transition=cube")

puts $?
