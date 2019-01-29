

(0..42).each do |f|

  system("pandoc -f html -t markdown_strict img#{f}.html -o 'img#{f}.md'")

end


puts $?
