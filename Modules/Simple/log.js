let log = {

    ex1 : function(){
        var dateajd = Date.now();
        var dateNoel = new Date("12/25/2022")
        
        var Difference_In_Time = dateNoel - dateajd;

        
        var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
        console.log(`Il y a encore  ${Difference_In_Days} jours à attendre  pour fêter noel !  `)
    },



    ex2 : function(){
        var dateajds = new Date().getTime();
        var dateAnnif = new Date(2022,07,14).getTime();
        var Diff = (dateAnnif - dateajds);

        var Diff2 = Math.round(Diff /(1000*3600*24))
        console.log(`Les jours entre la date d'aujourd'hui et ma date d'anniversaire est : ${Diff2}`)
        
    } ,



    ex3 : function(){
        var tdayDate = Date.now()
        var dateVacances = new Date("09/30/2022")

        var dateUntilVacation = (dateVacances - tdayDate);
        var resultat = Math.round(dateUntilVacation / (1000*3600*24))
        console.log(`Nombre de jours avant les vacances : ${resultat}`)
    }  , 

    ex4 : function(){
        var vendrediTreize = new Date(2023,00,13);
                const blabla = vendrediTreize.getDay();
                const number = vendrediTreize.getDate();
        const ajd = new Date()
        


        var CalculFriday13 = vendrediTreize - ajd ;
        var Transformation = Math.round(CalculFriday13 / (1000*3600*24))

        console.log("Il reste " +  Transformation + " jours avant le prochain vendredi 13.") ;
        if(blabla == 5 && number == 13){
            console.log("C'est un vendredi 13.");
        }
        else{
            console.log("C'est un jour normal.");
        }
    },
        
}
module.exports = log;