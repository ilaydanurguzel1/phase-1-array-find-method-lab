// code your solution here

function superbowlWin(record){
    let superWin=record.find(record=>record.result==="W")
        if(superWin){
            return superWin.year
        }
        else{
            return undefined
        }
};


