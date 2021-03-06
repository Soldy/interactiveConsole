
exports.buffer=function(){
    /*
     * @param string {id}
     * @public
     * @return string {id}
     */
    this.create=function(id){
        if(typeof id === "undefined")
            id=getSerial();
        if (typeof buffers[id] !== "undefined")
            return false;
        buffers[id]={
             original  : "",
             processed : [],
             width     : 10,
             height    : 10
        }
        return id;
    }
    /*
     * @param string {id}
     * @param string {text}
     * @public
     * @return boolean
     */
    this.add=function(id, text){
        id = id.toString();
        if (!checkBuffers(id))
            return false;
        buffers[id].original += text;
        buffers[id].processed = lineSplitter(
            buffers[id].original,
            buffers[id].width
        );
        return true;
    }
    /*
     * @param string {id}
     * @public
     * @return string||boolean
     */
    this.getAll=function(id){
        if (!checkBuffers(id))
            return false;
        return buffers[id.toString()].original;
    }
    /*
     * @param string {id}
     * @param integer {first}
     * @public
     * @return string||boolean
     */
    this.getScreen=function(id, first){
        id = id.toString();
        if(typeof first !== "undefined")
            first = 0;
        if (!checkBuffers(id))
            return false;
        return buffers[id].processed.slice(first, buffers[id].height);
    }
    /*
     * @param integer {width}
     * @param integer {height}
     * @public
     * @return boolean
     */
    this.setScreen=function (width, height){
        if (!checkBuffers(id))
            return false;
        buffers[id].width=width;
        buffers[id].height=height;
        return true;
    }
    /*
     * @param string {id}
     * @public
     * @return boolean
     */
    this.clear=function(id){
        if (!checkBuffers(id))
            return false;
        buffers[id].original = "";
        return true;
    }
    /*
     * @param string {id}
     * @public
     * @return boolean
     */
    this.del=function(id){
        if (!checkBuffers(id))
            return false;
        delete buffers[id];
        return true;
    }
    /*
     * @private
     * @var json
     */
    let buffers = {};
    /*
     * @param string {id}
     * @private
     * @return boolean
     */
    let checkBuffers = function(id){
        if (typeof buffers[id.toString()] === "undefined")
            return false;
        return true;
    }
    /*
     * @param string {original}
     * @param integer {width}
     * @private
     * @return boolean
     */
    let lineSplitter = function(original, width){
        let lines = [];
        let out = [];
        original = original.split("\n");
        for (let i of original){
             lines.push(i.split(" "));
        }
        let left=width;
        let current = "";
        for (let line of lines)
            for(let word of line){
                 let processed = wordSplit(word,left,width);
                 if (processed.length == 1){
                     current += processed[0];
                 }else{
                     out.push(current+processed[0]);
                     for(let i =1 ; processed.length-1 > i ; i ++)
                         out.push(processed[i]);
                     current = processed[processed.length-1];
                        
                 }
                 if (current.length < width-1){
                     left = width - current.length;
                }else{
                     out.push(current);
                     current = "";
                     left = width;
                }
             }
             out.push(current);

        return out;
    }
    /*
     * @param string {word}
     * @param integer {left}
     * @param integer {width}
     * @private
     * @return boolean
     */
    let wordSplit=function(word, left, width){
        let length = word.length+1;
        let begin = " ";
        if (left === width)
            begin = "";
        if(left > length)
            return [begin+word];
        if(length > left || length <= width){
           return ["", word];
        }
        let out = []; 
        out.push(begin+word.substring(0, left-1));
        word = word.substring(left-1);
        while(true){
            out.push(word.substring(0, width));
            if(word.length > width){
                word = word.substring(width);
            }else{
                break;
            }
        }
        return out;
    }
    /*
     * @private
     * @var integer
     */
    let serial = 0 ;
    /*
     * @private
     * @return string
     */
    let getSerial = function(){
        id  = serial.toString();
        serial ++;
        if (typeof buffers[id] !== "undefined")
            id = getSerial();
        return id;
    }
}


