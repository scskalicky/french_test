
# an R solution for decoded (still yet to try)
library(base64enc)
y <- base64decode(base64str)
myfile <- file("results.wav","wb")
writeBin(y, myfile)
close(myfile)