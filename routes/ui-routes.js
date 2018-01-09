var exec        =    require('child_process').exec,
    fs          =    require('fs');
var sleep       = require('system-sleep');

var flag   =0
    current_dir = __dirname;

var UIRoutes = function(app,opn,fileUpload,shell,exec) {

    this.app = app;
    this.opn = opn;
    this.fileUpload = fileUpload;
    this.shell = shell;
    this.exec = exec;

};

global.baseFolder = "D:/TON";
module.exports = UIRoutes;
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

    app.post('/jenkins',
    function(req, res){
    
     console.log("Came into Jenkins")
     
            child = shell.exec('START ' + baseFolder + "/bat_file/openJenkins.bat");
            res.end();
    }); 


	app.post('/prepareWebAPI',
    	function(req, res){
    
      		if (!req.files)
                return res.status(400).send('No files were uploaded.');

            global.sampleFile = req.files.sampleFile;
            //console.log("SAMPLE",sampleFile)

            folderName = sampleFile.name.split ('.')

            folder = baseFolder+'/WebTesting/API/GUI/Demo_Bell/'+ folderName[0]
            
            if (!fs.existsSync(folder)){
				fs.mkdirSync (folder)
			}	
			//global.inputFileName = baseFolder+'/WebTesting/API/GUI/Demo_Bell/'+sampleFile.name+'/' + sampleFile.name;
          	// console.log("BASEFOLDER",inputFileName)
          	global.inputFileName = folder + '/' + sampleFile.name
            console.log("SAMPLE FILE",sampleFile);
            console.log("INPUT FILE",inputFileName);
            sampleFile.mv (inputFileName, function(err){
                if (err)
                    return res.status(500).send(err);
            });

            sleep(5000);

            //child = shell.exec('python '+baseFolder+'/WebTesting/API/GUI/Demo_Bell/Load_Json_Parser.py ' + inputFileName+' '+baseFolder);
            try{
            	child = exec('python '+baseFolder+'/WebTesting/API/GUI/Demo_Bell/Load_Json_Parser.py ' + inputFileName+' '+baseFolder, (e, stdout, stderr)=> {
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


	app.post('/executeWebApi',
        function(req, res){

        dataFile = baseFolder+"/WebTesting/API/GUI/Demo_Bell/CPU%."+"csv";
        ColumnNamesList = "Time , CPU (%), Memory Usage (%)\n"
          
        
        fs.writeFile(dataFile,ColumnNamesList , function(err) {
         if(err) {
             return console.log(err);
         }
        console.log("The file was saved!");
        });

          child = exec('ride.py '+baseFolder+'/WebTesting/API/GUI/Demo_Bell/LoadTest.robot', (e, stdout, stderr)=> {
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

            if (!req.files)
                return res.status(400).send('No files were uploaded.');

            global.sampleFile = req.files.sampleFile;
            console.log("SAMPLE",sampleFile)
            flag = 1

            folderName = sampleFile.name.split ('.')

            folder = baseFolder+'/WebTesting/Browser/GUI/Demo_Bell/'+ folderName[0]
            
            if (!fs.existsSync(folder)){
                fs.mkdirSync (folder)
            }   
            //global.inputFileName = baseFolder+'/WebTesting/API/GUI/Demo_Bell/'+sampleFile.name+'/' + sampleFile.name;
            // console.log("BASEFOLDER",inputFileName)
            global.inputFileName = folder + '/' + sampleFile.name
            sampleFile.mv (inputFileName, function(err){
                if (err)
                    return res.status(500).send(err);
            });

            sleep(5000);

            child = shell.exec('python '+baseFolder+'/WebTesting/Browser/GUI/Demo_Bell/readJson.py ' + inputFileName+' '+baseFolder);
            res.end();

            var name = (inputFileName).split(".");
            console.log("NAME",name)
            child = exec('python '+baseFolder+'/WebTesting/Browser/GUI/Demo_Bell/createRobot.py '+name[0]+".py "+baseFolder, (e, stdout, stderr)=> {
            if (e instanceof Error) {
              console.error(e);
              throw e;
            }
            console.log('stdout ', stdout);
            res.end();
            });

            child = shell.exec('python -m compileall '+baseFolder+'/WebTesting/Browser/GUI/Demo_Bell/'+ name[6]+".py");
            res.end();

        });


    app.post('/execute',
        function(req, res){

        dataFile = baseFolder+"/WebTesting/Browser/GUI/Demo_Bell/CPU%."+"csv";
        ColumnNamesList = "Time , CPU (%), Memory Usage (%)\n"
          
        
        fs.writeFile(dataFile,ColumnNamesList , function(err) {
         if(err) {
             return console.log(err);
         }
        console.log("The file was saved!");
        });
        child = exec('ride.py '+baseFolder+'/WebTesting/Browser/GUI/Demo_Bell/TestCases.robot', (e, stdout, stderr)=> {
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
    child = exec(baseFolder+"/WebTesting/Browser/GUI/Demo_Bell/viewAnalytics.py "+baseFolder, (e, stdout, stderr)=> {
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

    // Response for apiFile1 request


    app.post('/apiFile1',
        function (req,res) {
// global.ApiFile2 = req.files.Api;
//             console.log(req.files.name);
            console.log(req.files);
            // console.log(ApiFile2);
            res.end()
        })





};
