#jai 1.0V
#anitation  0
#target es6
#readyAll no


interface box -> offerClass-ES5prototype
    <print(text: text^0-2048/raw/):boolen
    <resize():boolen
    !buffer=array[string^0-2048/raw/*500]
    !processedBuffer=array[string^0-2048/safe/*500]
    !setup=dictonary{
        width:integer^0-1024
        height:integer^0-1024
        top:integer^0-1024
        left:integer^0-1024
        border:boolen
    }
    !bufferSizeRegulator(): ~ buffer/raw/->processedBuffer/safe/
    !render(): processedBuffer > %stdo 
