var exec        =    require('child_process').exec,
    fs          =    require('fs');
var sleep       = require('system-sleep');

var flag        =0
    current_dir = __dirname;

var UIRoutes = function(app,opn,fileUpload,shell,exec) {

    this.app = app;
    this.opn = opn;
    this.fileUpload = fileUpload;
    this.shell = shell;
    this.exec = exec;

};

global.baseFolder = "D:/TON";
global.appName    = "Demo_TON";
global.forAPI     = baseFolder+"/back_end/Web_API";
global.forBrowser = baseFolder+"/back_end/Web_Browser";
global.forMobile  = baseFolder+"/back_end/Mobile_GUI";
module.exports    = UIRoutes;
UIRoutes.prototype.init = function() {
    var self = this;
    var app = this.app;

    var opn = this.opn;
    var fileUpload = this.fileUpload;
    var shell = this.shell;
    var exec = this.exec;


    app.post('/kantu',
    function(req, res){

        opn('chrome-extension://gcbalfbdmfieckjlnblleoemohcganoc/popup.html', {app: ['chrome', '-new-window']});
        res.end();
    });


    app.post('/postman',
    function(req, res){
    
     console.log("Came into Postman")
     
            child = shell.exec('START C:/Postman/Update.exe --processStart "Postman.exe"');
            res.end();

    }); 


    app.post('/postmanRecord',
    function(req, res){
    
     console.log("Came into Postman for recording.")
     
        child = shell.exec('START C:/Postman/Update.exe --processStart "Postman.exe"');
        res.end();

        child = exec('"C:/Program\ Files\ (x86)/Google/Chrome/Application/chrome.exe" --ignore-certificate-errors', (e, stdout, stderr)=>{
            if (e instanceof Error) {
                console.error(e);
                throw e;
            }
        });
        res.end();
    });

            


    app.post('/jenkins',
    function(req, res){
      
     console.log("Came into Jenkins")
     
            child = shell.exec('Start chrome http://localhost:8080')
            res.end();
    }); 

    app.post('/notepad',
    function(req, res){
      
     console.log("Came into NotePad")

            child = shell.exec('START C:/Notepad++/notepad++.exe')
            res.end();
    }); 


	app.post('/prepareWebAPI',
    	function(req, res){
            
            console.log("came into prepareAPI")
            var object = req.files;
            var count = Object.keys(object).length;
            console.log("Number of Files : ",count)
            collFile = req.files['file[0]'].name.split('.json')
            folder = baseFolder+'/WebTesting/API/GUI/Demo_TON/'+collFile[0]
            
            for (i=0;i<count;i++){
                 value = 'file['+i+']'
                
                var fileData = req.files[value];
                var fileName =req.files[value].name;
            
            if (!fs.existsSync(folder)){
                fs.mkdirSync (folder)
            }
            var inputFile = folder + '/' + fileName

            fileData.mv (inputFile, function(err){
                if (err)
                    return res.status(500).send(err);
            });
            }
            
            
            try{
            if(count>1){
                cmd = 'python '+forAPI+'/Load_Json_Parser.py ' + collFile[0]+' ' +folder +' '+ req.files['file[1]'].name+' '+baseFolder+' '+appName
                }
            else{
                cmd = 'python '+forAPI+'/Load_Json_Parser.py ' + collFile[0]+' ' +folder +' '+ "None"+' '+baseFolder+' '+appName
                }
                
                child = exec(cmd, (e, stdout, stderr)=> {
                if (e instanceof Error) {
                 console.error(e);
                 throw e;
                }
                });
            }
            catch (ex){
                console.log ("In error...")
                console.log (ex)
            }
       
            console.log ("The file has been moved.")

            res.end()
    });    


	app.post('/executeWebApi',
        function(req, res){

        dataFile = baseFolder+"/WebTesting/API/GUI/"+appName+"/CPU%."+"csv";
        ColumnNamesList = "Time , CPU (%), Memory Usage (%)\n"
          
        
        fs.writeFile(dataFile,ColumnNamesList , function(err) {
         if(err) {
             return console.log(err);
         }
        console.log("The file was saved!");
        });

          child = exec('ride.py '+baseFolder+'/WebTesting/API/GUI/'+appName+'/LoadTest.robot', (e, stdout, stderr)=> {
          if (e instanceof Error) {
             console.error(e);
             throw e;
          }
          res.end();
            });

        });
    // app.use(fileUpload());

    app.post('/h',function (req,res) {
        console.log(req.files   ,req,"data")
        res.end()
    });
    app.post('/validate',
        function(req, res){
            console.log("came into validate");
            if (!req.files)
                return res.status(400).send('No files were uploaded.');

            global.sampleData = req.files['file[0]'];
            global.sampleFile = req.files['file[0]'].name;

            folderName = sampleFile.split('.')

            folder = baseFolder+'/WebTesting/Browser/GUI/'+appName+'/'+ folderName[0]
            
            if (!fs.existsSync(folder)){
                fs.mkdirSync (folder)
            }   

            global.inputFileName = folder + '/' + sampleFile
            sampleData.mv (inputFileName, function(err){
                if (err)
                    return res.status(500).send(err);
            });

            sleep(5000);

            child = shell.exec('python '+forBrowser+'/readJson.py ' + inputFileName+' '+baseFolder+' '+appName);
            res.end();

            var name = (inputFileName).split(".");
            console.log("NAME",name)
            child = exec('python '+forBrowser+'/createRobot.py '+name[0]+".py "+baseFolder+' '+appName, (e, stdout, stderr)=> {
            if (e instanceof Error) {
              console.error(e);
              throw e;
            }
            console.log('stdout ', stdout);
            res.end();
            });

            child = shell.exec('python -m compileall '+baseFolder+'/WebTesting/Browser/GUI/'+appName+'/'+ name[6]+".py");
            res.end();

        });


    app.post('/execute',
        function(req, res){

        dataFile = baseFolder+"/WebTesting/Browser/GUI/"+appName+"/CPU%."+"csv";
        ColumnNamesList = "Time , CPU (%), Memory Usage (%)\n"
          
        
        fs.writeFile(dataFile,ColumnNamesList , function(err) {
         if(err) {
             return console.log(err);
         }
        console.log("The file was saved!" + appName);
        });
        child = exec('ride.py '+baseFolder+'/WebTesting/Browser/GUI/'+appName+'/TestCases.robot', (e, stdout, stderr)=> {
        if (e instanceof Error) {
          console.error(e);
          throw e;
        }
        console.log('stdout ', stdout);
        console.log('Results -- /POC/Results')
        res.end();
        });
      });

    app.post('/analyze',
        function(req, res){

             console.log("Came to Analyze Results");
    child = exec(forBrowser+"/viewAnalytics.py "+baseFolder+' '+appName, (e, stdout, stderr)=> {
    if (e instanceof Error) {
        console.error(e);
        throw e;
    }
    console.log('stdout ', stdout);
    res.end();
    });
            console.log("Entering  into Kibana");

            child = opn('http://localhost:5601',{app:['chrome','-new-window']});
            console.log('stdout ');
        });

    // Response for apiFile1 req

 app.post('/apiFileUploadAPI',
        function (req,res) {

            var object = req.files;
            var count = Object.keys(object).length;
            console.log("Number of Files : ",count)
            collFile = req.files['file[0]'].name.split('.json')
            folder = baseFolder+'/APITesting/API/GUI/Demo_TON/'+collFile[0]
            
            for (i=0;i<count;i++){
                 value = 'file['+i+']'
                
                var fileData = req.files[value];
                var fileName =req.files[value].name;
            
            if (!fs.existsSync(folder)){
                fs.mkdirSync (folder)
            }
            var inputFile = folder + '/' + fileName

            fileData.mv (inputFile, function(err){
                if (err)
                    return res.status(500).send(err);
            });
            }
            
            
            try{
            if(count>1){
                cmd = 'python '+baseFolder+'/back_end/API_GUI/LoadAPI.py ' + collFile[0]+' ' +folder +' '+ req.files['file[1]'].name
                }
            else{
                cmd = 'python '+baseFolder+'/back_end/API_GUI/LoadAPI.py ' + collFile[0]+' ' +folder +' '+ "None"
                }
                
                child = exec(cmd, (e, stdout, stderr)=> {
                if (e instanceof Error) {
                 console.error(e);
                 throw e;
                }
                });
            }
            catch (ex){
                console.log ("In error...")
                console.log (ex)
            }
       
            console.log ("The file has been moved.")

            res.end()
        })

     app.post('/executeAPIGUI',
        function(req, res){
        
          child = exec('ride.py '+baseFolder+'/APITesting/API/GUI/'+appName+'/LoadTest.robot', (e, stdout, stderr)=> {
          if (e instanceof Error) {
             console.error(e);
             throw e;
          }
          res.end();
            });

        });

    app.post('/prepareMobileGUI',
        function(req, res){
            
            console.log("came into prepareMobileGUI...")

            if (!req.files)
                return res.status(400).send('No files were uploaded.');


            this.sampleData = req.files['file[0]'];
            this.sampleFile = req.files['file[0]'].name;

            folderName = sampleFile.split ('.')

            folder = baseFolder+'/MobileTesting/GUI/'+appName+'/'+ folderName[0]

            if (!fs.existsSync(folder)){
                fs.mkdirSync (folder)
            }
            this.inputFileName = folder + '/' + sampleFile

            sampleData.mv (inputFileName, function(err){
                if (err)
                    return res.status(500).send(err);
            });

            console.log ("The file has been moved.")
            sleep(5000);
            try{
                child = exec('python '+forMobile+'/mobileTest.py ' + inputFileName+' '+baseFolder+' '+appName, (e, stdout, stderr)=> {
                  if (e instanceof Error) {
                     console.error(e);
                     throw e;
                  }
                 res.end();
                  console.log ("Done....")
                });
            }catch (ex){
                console.log ("In error...")
                console.log (ex)
            }
        }); 

        app.post('/executeMobileGUI',
        function(req, res){

        dataFile = baseFolder+"/MobileTesting/GUI/"+appName+"/CPU%."+"csv";
        ColumnNamesList = "Time , CPU (%), Memory Usage (%)\n"
          
        
        fs.writeFile(dataFile,ColumnNamesList , function(err) {
         if(err) {
             return console.log(err);
         }
        console.log("The file was saved!");
        });

          child = exec('ride.py '+baseFolder+'/MobileTesting/GUI/'+appName+'/mobileTestcase.robot', (e, stdout, stderr)=> {
          if (e instanceof Error) {
             console.error(e);
             throw e;
          }
          res.end();
            });

        });

};
