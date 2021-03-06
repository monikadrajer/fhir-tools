(function(){
	var tr,td,collapsediv,resourceDiv,urlDiv,urlDivres,reqheadersDiv,reqheadersDivres,date,transferencoding,accessorigin,accessheaders,accessmethods,accessage,xpoweredby,lastmodified,contenttype;;
	var stu3PatientSuccessCount = 0;
	var trigger = 0;
	var stu3patById = "stu3patById";
	var stu3patByIdentifier = "stu3patByIdentifier";
	var stu3patByNameGender = "stu3patByNameGender";
	var stu3patByFamilyGender = "stu3patByFamilyGender";
	var stu3patByGivenGender = "stu3patByGivenGender";
	var stu3patByNameBirthdate = "stu3patByNameBirthdate";
	var stu3colbyId = "stu3byId";
	var stu3colbyIdentifier = "stu3byIdentifier";
	var stu3colbyNameGender = "stu3byNameGender";
	var stu3colbyFamilyGender = "stu3byFamilyGender";
	var stu3colbyGivenGender = "stu3byGivenGender";
	var stu3colbyNameBirthdate = "stu3byNameBirthdate";
	var l = $( '#executebtn' ).ladda();
	stu3patientById =  function(strurl){
		l.ladda( 'start' );
		stu3PatientSuccessCount = 0;
    	access_token = localStorage.getItem("access_token");
    	var patientid = localStorage.getItem("patientid");
    	strurl = strurl+ "/Patient/" +patientid + "?_format=json"
      	$.ajax({
      		url:strurl,
        	type:"GET",
	        beforeSend: function (xhr) {
	            if(localStorage.getItem("authtype") == 'auth'){
	        		xhr.setRequestHeader ("Authorization", "Bearer "+access_token);
	        	}
	            xhr.setRequestHeader("Content-Type","application/json+fhir");
	        },
	        success:function(data,status,xhr){
	        	var resType='';
	        	if(data.entry){
	        		resType =  data.entry[0].resource.resourceType;
	        	}else if(data.resourceType){
					resType = data.resourceType;
	        	}
	          	stu3PatientSuccessCount++;
	          	$('.stu3patientrunById').html('Passed');
	          	if(trigger == 0){
	          		$('.stu3patientrun').html('Passed');
	          	}
	          	$('.stu3patientpass').html(stu3PatientSuccessCount);
	          	stu3patientByIdentifier(strurl,data,stu3patByIdentifier,stu3colbyIdentifier);
	          	stu3patientByNameandGender(strurl,data,stu3patByNameGender,stu3colbyNameGender);
	          	stu3patientByFamilyandGender(strurl,data,stu3patByFamilyGender,stu3colbyFamilyGender);
	          	stu3patientByGivenandGender(strurl,data,stu3patByGivenGender,stu3colbyGivenGender);
	          	stu3patientByNameandBirthdate(strurl,data,stu3patByNameBirthdate,stu3colbyNameBirthdate);
	          	$('#authsuccess').html('');
		  		authsuccess = $('<div class="alert alert-success" id="serverauthorized" style="text-align:center;margin-bottom:0px;padding:12px"><strong>Server Authorized Successfully. Run a test by entering various values in the fileds.</strong></div>');
		        $('#authsuccess').append(authsuccess);
	          	stu3renderresults(data,strurl,xhr,stu3patById,stu3colbyId,resType);
	          	l.ladda( 'stop' );
	        },
	        error:function(e){
	        	trigger = 1;
	        	l.ladda( 'stop' );
	        	$('.stu3patientrunById').html('Failed');
	        	$('.stu3patientrun').html('Failed');
	        	$('.stu3patientrun').parent().addClass('bg-danger');
	        	stu3rendererror(e,stu3patById);
	   		}
		});
	};

	stu3patientByIdentifier =  function(strurl,data,stu3patByIdentifier,stu3colbyIdentifier){
		var identifierSystem = data.identifier[0].system;
		var identifierValue = data.identifier[0].value;
		var strurl = localStorage.getItem("strurl");
		strurl = strurl + "/" + data.resourceType + "/?identifier="+identifierSystem+"|"+identifierValue+"&_format=json";
		access_token = localStorage.getItem("access_token");
		$.ajax({
      		url:strurl,
        	type:"GET",
	        beforeSend: function (xhr) {
	            if(localStorage.getItem("authtype") == 'auth'){
	        		xhr.setRequestHeader ("Authorization", "Bearer "+access_token);
	        	}
	            xhr.setRequestHeader("Content-Type","application/json+fhir");
	        },
	        success:function(data,status,xhr){
	        	var resType='';
	        	if(data.entry){
	        		resType =  data.entry[0].resource.resourceType;
	        	}else if(data.resourceType){
					resType = data.resourceType;
	        	}
	          	stu3PatientSuccessCount++;
	          	$('.stu3patientrunByIdentifier').html('Passed');
	          	if(trigger == 0){
	          		$('.stu3patientrun').html('Passed');
	          	}
	          	$('.stu3patientpass').html(stu3PatientSuccessCount);
	          	stu3renderresults(data,strurl,xhr,stu3patByIdentifier,stu3colbyIdentifier,resType);
	        },
	        error:function(e){
	        	trigger = 1;
	        	l.ladda( 'stop' );
	        	$('.stu3patientrunByIdentifier').html('Failed');
	        	$('.stu3patientrun').html('Failed');
	        	$('.stu3patientrun').parent().addClass('bg-danger');
	        	stu3rendererror(e,stu3patByIdentifier);
	   		}
		});
	}

	stu3patientByNameandGender = function(strurl,data,stu3patByNameGender,stu3colbyNameGender){
		var patName = data.name[0].family;
		var patGender = data.gender;
		var strurl = localStorage.getItem("strurl");
		strurl = strurl + "/" + data.resourceType + "/?name="+patName+"&gender="+patGender+"&_format=json";
		access_token = localStorage.getItem("access_token");
		$.ajax({
      		url:strurl,
        	type:"GET",
	        beforeSend: function (xhr) {
	            if(localStorage.getItem("authtype") == 'auth'){
	        		xhr.setRequestHeader ("Authorization", "Bearer "+access_token);
	        	}
	            xhr.setRequestHeader("Content-Type","application/json+fhir");
	        },
	        success:function(data,status,xhr){
	        	var resType='';
	        	if(data.entry){
	        		resType =  data.entry[0].resource.resourceType;
	        	}else if(data.resourceType){
					resType = data.resourceType;
	        	}
	          	stu3PatientSuccessCount++;
	          	$('.stu3patientrunByNameGender').html('Passed');
	          	if(trigger == 0){
	          		$('.stu3patientrun').html('Passed');
	          	}
	          	$('.stu3patientpass').html(stu3PatientSuccessCount);
	          	stu3renderresults(data,strurl,xhr,stu3patByNameGender,stu3colbyNameGender,resType);
	        },
	        error:function(e){
	        	trigger = 1;
	        	l.ladda( 'stop' );
	        	$('.stu3patientrunByNameGender').html('Failed');
	        	$('.stu3patientrun').html('Failed');
	        	$('.stu3patientrun').parent().addClass('bg-danger');
	        	stu3rendererror(e,stu3patByNameGender);
	   		}
		});
	}

	stu3patientByFamilyandGender = function(strurl,data,stu3patByFamilyGender,stu3colbyFamilyGender){
		var patFamilyName = data.name[0].family;
		var patGender = data.gender;
		var strurl = localStorage.getItem("strurl");
		strurl = strurl + "/" + data.resourceType + "/?family="+patFamilyName+"&gender="+patGender+"&_format=json";
		access_token = localStorage.getItem("access_token");
		$.ajax({
      		url:strurl,
        	type:"GET",
	        beforeSend: function (xhr) {
	            if(localStorage.getItem("authtype") == 'auth'){
	        		xhr.setRequestHeader ("Authorization", "Bearer "+access_token);
	        	}
	            xhr.setRequestHeader("Content-Type","application/json+fhir");
	        },
	        success:function(data,status,xhr){
	        	var resType='';
	        	if(data.entry){
	        		resType =  data.entry[0].resource.resourceType;
	        	}else if(data.resourceType){
					resType = data.resourceType;
	        	}
	          	stu3PatientSuccessCount++;
	          	$('.stu3patientrunByFamilyGender').html('Passed');
	          	if(trigger == 0){
	          		$('.stu3patientrun').html('Passed');
	          	}
	          	$('.stu3patientpass').html(stu3PatientSuccessCount);
	          	stu3renderresults(data,strurl,xhr,stu3patByFamilyGender,stu3colbyFamilyGender,resType);
	        },
	        error:function(e){
	        	trigger = 1;
	        	l.ladda( 'stop' );
	        	$('.stu3patientrunByFamilyGender').html('Failed');
	        	$('.stu3patientrun').html('Failed');
	        	$('.stu3patientrun').parent().addClass('bg-danger');
	        	stu3rendererror(e,stu3patByFamilyGender);
	   		}
		});
	}

	stu3patientByGivenandGender = function(strurl,data,stu3patByGivenGender,stu3colbyGivenGender){
		var patGivenName = data.name[0].given;
		var patGender = data.gender;
		var strurl = localStorage.getItem("strurl");
		strurl = strurl + "/" + data.resourceType + "/?given="+patGivenName+"&gender="+patGender+"&_format=json";
		access_token = localStorage.getItem("access_token");
		$.ajax({
      		url:strurl,
        	type:"GET",
	        beforeSend: function (xhr) {
	            if(localStorage.getItem("authtype") == 'auth'){
	        		xhr.setRequestHeader ("Authorization", "Bearer "+access_token);
	        	}
	            xhr.setRequestHeader("Content-Type","application/json+fhir");
	        },
	        success:function(data,status,xhr){
	        	var resType='';
	        	if(data.entry){
	        		resType =  data.entry[0].resource.resourceType;
	        	}else if(data.resourceType){
					resType = data.resourceType;
	        	}
	          	stu3PatientSuccessCount++;
	          	$('.stu3patientrunByGivenGender').html('Passed');
	          	if(trigger == 0){
	          		$('.stu3patientrun').html('Passed');
	          	}
	          	$('.stu3patientpass').html(stu3PatientSuccessCount);
	          	stu3renderresults(data,strurl,xhr,stu3patByGivenGender,stu3colbyGivenGender,resType);
	        },
	        error:function(e){
	        	trigger = 1;
	        	l.ladda( 'stop' );
	        	$('.stu3patientrunByGivenGender').html('Failed');
	        	$('.stu3patientrun').html('Failed');
	        	$('.stu3patientrun').parent().addClass('bg-danger');
	        	stu3rendererror(e,stu3patByGivenGender);
	   		}
		});
	}

	stu3patientByNameandBirthdate = function(strurl,data,stu3patByNameBirthdate,stu3colbyNameBirthdate){
		var patName = data.name[0].family;
		var patBirthdate = data.birthDate;
		var strurl = localStorage.getItem("strurl");
		strurl = strurl + "/" + data.resourceType + "/?name="+patName+"&birthdate="+patBirthdate+"&_format=json";
		access_token = localStorage.getItem("access_token");
		$.ajax({
      		url:strurl,
        	type:"GET",
	        beforeSend: function (xhr) {
	            if(localStorage.getItem("authtype") == 'auth'){
	        		xhr.setRequestHeader ("Authorization", "Bearer "+access_token);
	        	}
	            xhr.setRequestHeader("Content-Type","application/json+fhir");
	        },
	        success:function(data,status,xhr){
	        	var resType='';
	        	if(data.entry){
	        		resType =  data.entry[0].resource.resourceType;
	        	}else if(data.resourceType){
					resType = data.resourceType;
	        	}
	          	stu3PatientSuccessCount++;
	          	$('.stu3patientrunByNameBirthDate').html('Passed');
	          	if(trigger == 0){
	          		$('.stu3patientrun').html('Passed');
	          	}
	          	$('.stu3patientpass').html(stu3PatientSuccessCount);
	          	stu3renderresults(data,strurl,xhr,stu3patByNameBirthdate,stu3colbyNameBirthdate,resType);
	        },
	        error:function(e){
	        	trigger = 1;
	        	l.ladda( 'stop' );
	        	$('.stu3patientrunByNameBirthDate').html('Failed');
	        	$('.stu3patientrun').html('Failed');
	        	$('.stu3patientrun').parent().addClass('bg-danger');
	        	stu3rendererror(e,stu3patByNameBirthdate);
	   		}
		});
	}

	stu3renderresults = function(data,strurl,xhr,trid,colbyIdentifier,resType){
			/*$('.removabletr').remove();*/
			tr = $('<tr class="stu3patientremovabletr"></tr>');
			td = $('<td colspan="6" class="hiddenRow"></td>');
			collapsediv = $('<div class="accordian-body collapse" id='+colbyIdentifier+'><h5>Test Details</h5></div>');
			// Resource
			resourceDiv = $('<div class="col-md-12"><label class="col-md-3">Resource:</label></div>');
			resourceDivres = $('<div class="col-md-9" style="word-break:break-all">'+resType+'</div>');
			resourceDiv.append(resourceDivres);
			collapsediv.append(resourceDiv);

			//URL
			urlDiv = $('<div class="col-md-12"><label class="col-md-3">URL:</label></div>');
			urlDivres = $('<div class="col-md-9" style="word-break:break-all">'+strurl+'</div>');
			urlDiv.append(urlDivres);
			collapsediv.append(urlDiv);

			//Request Headers
			reqheadersDiv = $('<div class="col-md-12"><label class="col-md-3">Request Headers:</label></div>');
			reqheadersDivres = $('<div class="col-md-9" style="word-break:break-all"></div>');
			/* req headers start */
				useragent = $('<div class="header-text"><u>User-Agent</u>: FHIR Client</div>');
		    	contenttype = $('<div class="header-text"><u>Content-Type</u>: application/xml+fhir;charset=UTF-8</div>');
		    	acceptchar = $('<div class="header-text"><u>Accept-Charset</u>: UTF-8</div>');
		    	accept = $('<div class="header-text"><u>Accept</u>: application/xml+fhir</div>');
		    	format = $('<div class="header-text"><u>format</u>: application/xml+fhir</div>');
		    	authorization = $('<div class="header-text"><u>Authorization</u>: Bearer '+access_token+'</div>');
			/* req headers end */
			reqheadersDivres.append(useragent,contenttype,acceptchar,accept,format,authorization);
			reqheadersDiv.append(reqheadersDivres);
			collapsediv.append(reqheadersDiv);

			//Response Headers
			respheadersDiv = $('<div class="col-md-12"><label class="col-md-3">Response Headers:</label></div>');
			respheadersDivres = $('<div class="col-md-9" style="word-break:break-all"></div>');
			/* resp headers start */
				if(xhr.getResponseHeader('Date') != null){
		    		date = $('<div class="header-text"><u>date</u>: '+xhr.getResponseHeader('Date')+'</div>');
		    	}
		    	if(xhr.getResponseHeader('Transfer-Encoding') != null){
		    		transferencoding = $('<div class="header-text"><u>transfer-encoding</u>: '+xhr.getResponseHeader('Transfer-Encoding')+'</div>');
		    	}
		    	if(xhr.getResponseHeader('Access-Control-Allow-Origin') != null){
		    		accessorigin = $('<div class="header-text"><u>access-control-allow-origin</u>: '+xhr.getResponseHeader('Access-Control-Allow-Origin')+'</div>');
		    	}
		    	if(xhr.getResponseHeader('Access-Control-Allow-Headers') != null){
		    		accessheaders = $('<div class="header-text"><u>access-control-allow-headers</u>: '+xhr.getResponseHeader('Access-Control-Allow-Headers')+'</div>');
		    	}
		    	if(xhr.getResponseHeader('Access-Control-Allow-Methods') != null){
		    		accessmethods = $('<div class="header-text"><u>access-control-allow-methods</u>: '+xhr.getResponseHeader('Access-Control-Allow-Methods')+'</div>');
		    	}
		    	if(xhr.getResponseHeader('Access-Control-Max-Age') != null){
		    		accessage = $('<div class="header-text"><u>access-control-allow-age</u>: '+xhr.getResponseHeader('Access-Control-Max-Age')+'</div>');
		    	}
		    	if(xhr.getResponseHeader('X-Powered-By') != null){
		    		xpoweredby = $('<div class="header-text"><u>x-powered-by</u>: '+xhr.getResponseHeader('X-Powered-By')+'</div>');
		    	}
		    	if(xhr.getResponseHeader('Last-Modified') != null){
		    		lastmodified = $('<div class="header-text"><u>last-modified</u>: '+xhr.getResponseHeader('Last-Modified')+'</div>');
		    	}
		    	if(xhr.getResponseHeader('Content-Type') != null){
		    		contenttype = $('<div class="header-text"><u>content-type</u>: '+xhr.getResponseHeader('Content-Type')+'</div>');
		    	}
			/* resp headers end */
			respheadersDivres.append(date,transferencoding,accessorigin,accessheaders,accessmethods,accessage,xpoweredby,lastmodified,contenttype);
			respheadersDiv.append(respheadersDivres);
			collapsediv.append(respheadersDiv);

			// Response Validation
			renderstu3ResponseValidation(collapsediv, data);

			//Response Body
			respbodyDiv = $('<div class="col-md-12"><label class="col-md-3">Response Body:</label></div>');
			respbodyDivres = $('<div class="col-md-9" style="word-break:break-all"><pre class="comment more">'+JSON.stringify(data,undefined,2)+'</pre></div>');
			respbodyDiv.append(respbodyDivres);
			collapsediv.append(respbodyDiv);

			td.append(collapsediv);
			tr.append(td);
			$('#'+trid).after(tr);
		$('.comment').shorten();
	}

	stu3rendererror = function(e,trid){
		console.log(e);
		var authfail;
		tr = $('<tr class="patientremovabletr"></tr>');
		td = $('<td colspan="6" class="hiddenRow"></td>');
		if(e.status == '401'){
	        var parseHtml = $(e.responseText);
			var foundElement = parseHtml.find('u');

	        authfail = $('<div class="alert alert-danger" style="text-align:center;margin-bottom:0px;padding:12px"><strong>'+$(foundElement[0]).text()+'</strong></div>');
		}else{
	        authfail = $('<div class="alert alert-danger" style="text-align:center;margin-bottom:0px;padding:12px"><strong>'+e.responseJSON.resourceType+" - "+e.responseJSON.issue[0].diagnostics+'</strong></div>');
		}
		td.append(authfail);
		tr.append(td);
		$('#'+trid).after(tr);
	}
}).call(this);