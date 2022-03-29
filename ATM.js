console.log("WELCOE")
console.log("IN ICICI BANK")
console.log("ENTER YOUR CARD")
console.log("FOR ENGLISH ENETR (1)")
console.log("FOR HINDI ENETR (2)")
function atm(){
    let readlinesync = require("readline-sync")
    var language = readlinesync.question("ENTER YOUR LANGUAGE WHAT DO YOU WANT FOR ENGLISH ENTER 1 AND FOR ENGLISH ENTER 2:- ")
    if (language == 1) {
        console.log("YOUR PROCCESS GOING IN ", "ENGLISH")
        var pin_code1 = readlinesync.questionInt('ENTER YOUR CORRECT PIN CODE  :- ');
        var pin_code2 = readlinesync.questionInt('FOR VERIFICATION ENTER AGAIN YOUR CORRECT PIN CODE :- ');
        if (pin_code1 === pin_code2) {
            console.log("1. CASH WITHDRAWAL :- ")
            console.log("2. BALANCE INQUARY :- ")
            console.log("3. SAVING :- ")
            console.log("4. MONEY TRANSFAR :- ")
            console.log("5.PIN CODE CHANGE")
            var INQUARY = readlinesync.questionInt("WHICH INQUARY DO YOU WANT FOR THAT ENTER THE NUMBER")
            if (INQUARY == 1) {
                console.log("CASH WITHDRAWAL :-")
                var amount = readlinesync.questionInt("ENTER AMOUNT:- ")
                if (amount >= 500) {
                    console.log("YOUR TRANSACTION IS IN PROSESS $$$")
                    console.log("PLEASE WAIT $$$$$$")
                    console.log("PLEASE COLLECT YOUR CASE $$$$$")
                    console.log("THANKS FOR USING ICICI BANK  ")
                }
                else {
                    console.log("THAT AMOUNT IS NOT ABILABLE ")
                }
            }
            else if (INQUARY == 2) {
                console.log("BALANCE INQUARY :- ")
                console.log("YOU HAVE 1,000 MONEY IN YOUR ACCOUNT%%% ")
                console.log("THANKS FOR USING ICICI BANK ")
            }
            else if(INQUARY==3){            
                console.log("saving ")
                console.log("you have saving account ")
                console.log("thanks for using icici bank ")
            }
            else if(INQUARY==4){
                console.log("MONEY TRANSFAR")
                console.log("ONLY 500 TO MORE AND 10,000 LESS MONEY TRANSFAR ")
                amount=int(input(" ENTER AMOUNT HOW MUCH MONEY DO YPU WANT TO TRANSFAR "))
                if (amount>=500 && amount<=10000){
                    console.log(" YOUR MONEY TRANSFAR SUCCESSFUL ")

                }
                else{
                    console.log("NOT SUCCESSFUL ")

                }
            }
            else if(INQUARY==5){
                var pin_change1=readlinesync.question("ENTER HERE YOUR NEW PIN CODE NUMBER:-  ")
                var pin_change2=readlinesync.question("ENTER HERE AGAIN FOR CONFIRMATION YOUR NEW PIN CODE NUMBER:-  ")
                if(pin_change1===pin_change2){
                    console.log("YOUR PIN CODE CHANGED SUCCESSFULY")
                }

            }
        }
    }

    else if(language == 2){
        console.log("aapki prakriya hindi main shuru ho rahi hai ")
        console.log("aapka suagat hai ")
        console.log("icici bank main ")   

        var pin_code1 = readlinesync.questionInt('aapna sahi pin code number dale =:-  ');
        var pin_code2 = readlinesync.questionInt('ek bar fir jach ke liye aapna sahi pin code number dale = :- ');  
        if (pin_code1===pin_code2){
            console.log("aap kon si jach karna chahate hai ")
            console.log("1. nakad nikashi  ")
            console.log("2. rashi ki jach ")
            console.log("3. bachat khata ")
            console.log("4. rashi bhejna ")
            console.log("pin change karne ke liye 5 dawaye")
            var jach=readlinesync.questionInt("aapko kon si jach karni hai us ke liye upper diye gaye number daliye:- ")
            if (jach==1){
                rakam=readlinesync.questionInt("aap kitni rakam nikalna chahate hai ")
                if (rakam>=500 && rakam<=10000){
                    console.log("nakad nikashi ")
                    console.log("kriyiya pratiksha kijiye ")
                    console.log("aapki rsksm aa rahi hai ")
                    console.log("kriyipya aapni rakam le lijiye ")
                }
                else{
                    console.log("aapne kahi galti ki hai is liye rakam nhi aa rai hai ")
                    console.log("kripiya fir se koshish kare ")

                }
            }
            else if(jach==2){
                print("rashi ki jach ")
                print("aapke khate main abhi itni rashi mojud hai ")

            }
            else if(jach==3){
                print("bachat khata ")
                print("aapka ye khata bachat wala hai ")
            }
            else if(jach==4){
                print("rashi bhejna ")
                print("aap 500 se uper or 10,000 tak ki rashi bhej sakte hai ")
                rakam=readlinesync.questionInt("aao kitni rakam nikalna chahate hai ")
                if(rakam>=500 && rakam<=10000){
                    print("nakad nikashi ")
                    print("kriyiya pratiksha kijiye ")
                    print("aapki rsksm aa rahi hai ")
                    print("kriyipya aapni rakam le lijiye ")


                }
                else{
                    print("aapne kahi galti ki hai is liye rakam nhi aa rai hai ")
                    print("kripiya fir se koshish kare ")
                }
            

            }
            else if(rakam==5){
                var pin_change1=readlinesync.question("aapna pin code change karne ke liye yaha aapna naya pin code dale:-  ")
                var pin_change2=readlinesync.question("aapne pin code ki jach ke liye fir se aapna pin code yaha dale:-  ")
                if(pin_change1===pin_change2){
                    console.log("aapka pin code change ho gaya")
                }
                else{
                    console.log("aapka pin code change nhi hua ")
                }


            }



            }
        }

            }



atm()


