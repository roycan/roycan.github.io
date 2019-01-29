header = "---
author: Patricia Cajaljal
date: January 2019
title: CS 174 Presentation
---
"


files = []

files << header

(0..42).each do |n|

  f = File.read("img#{n}.md")

  files << f

end


files = files.join("\n\n---\n\n")

f = files.split("\n")

files = []

f.each do |l|
  if l.match('.html')  #||
      # !l.match('[Back]')
     # files << l
     p l
   else
     files << l
  end

end



files = files.join("\n")


# files = files.gsub(/###/, "##")

File.write("stitched.md", files)

p header
