//-------------------------global var---------------
let mail
let pass
// let pass = document.getElementById("exampleInputPassword1").innerText;

async function test(){
    mail = document.getElementById("mail").value
    pass= document.getElementById("pass").value
    //---------------------for create record--------------------
    formData = {
        "data" : {
            "Email":mail,
            "Password":pass
            
        }
    }

    updateData = {
        "data" : {
            "Email":mail,
            "Password":pass
            
        }
    }

    let counteer=0;
    let allRecID =[];
    let allID;
    //-------------------------init record----------------------
   await ZOHO.CREATOR.init().then(async function(data) {
         
         
        
        //------------------------get all record---------------
        try{
        allRec = {
            appName : "c-l-metha-sishya-school-omr",
        reportName : "All_Test_Widget_Tests"
        }

       
      
        //--------------------get all records-----------------------------
       await ZOHO.CREATOR.API.getAllRecords(allRec).then(function(response){
            //callback block
            allID= response.data
            for(var ids in allID)
            {
               allRecID.push(allID[ids].Email)
            }
            console.log(allRecID);
        });
       
        for (var mil in allRecID)
        {
            console.log(mil)
            console.log(document.getElementById("Email").value);
            if(mil== document.getElementById("Email").value)
            {
                counteer =+1;
            }
        }
    }
    catch(erro)
    {
        console.log(erro)
    }
          try{
             //---------------add record----------------------
          let config = {
            appName : "c-l-metha-sishya-school-omr",
            formName : "test_widget_test1",
            data : formData
          }
        let rec_ID;
    //----------------------------add record API-----------------------
    await ZOHO.CREATOR.API.addRecord(config).then(function(response){
        //callback block
         rec_ID =response.data.ID;
        console.log(response.data.ID);
    });
    }
    catch(adderr)
    {
        console.log(adderr);
    }


   
      
    });

   
}