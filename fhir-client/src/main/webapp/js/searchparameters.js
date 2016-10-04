var searchparameters = {
	"Patient" : "identifier,name,gender,family,given,birthdate",
	"AllergyIntolerance" : "patient",
	"Immunization" : "patient",
	"MedicationStatement" : "patient",
	"Condition" : "patient,category,clinicalstatus",
	"Procedure" : "patient",
	"Observation(Laboratory)" : "patient,code,date",
	"Observation(SmokingStatus)" : "patient,code",
	'Observation(VitalSigns)' : "patient,code,date",
}

var matchcriterian = {
	"identifier" : "in",
	"patient" : "in",
	"category" : "exact",
	"status" : "exact",
	"clinicalstatus" : "exact",
	"code" : "in",
	"name" : "exact,contains",
	"date" :"eq,gt,lt,ge,le",
	"family" : "exact",
	"given" : "exact",
	"gender" : "text,missing",
	"birthdate" :"eq,gt,lt,ge,le"
}
/*var matchcriterian = {
	"subject":"text,below,above,not,in,not-in",
	"subject.identifier" : "text,below,above,not,in,not-in",
	"identifier" : "text,below,above,not,in,not-in",
	"patient" : "text,below,above,not,in,not-in",
	"category" : "text,below,above,not,in,not-in",
	"status" : "exact,contains",
	"clinicalstatus" : "exact,contains",
	"substance" : "text,below,above,not,in,not-in",
	"manifestation" : "text,below,above,not,in,not-in",
	"severity" : "exact,contains",
	"duration" : "eq,ne,gt,lt,ge,le",
	"onset" : "eq,ne,gt,lt,ge,le",
	"orderer" : "text,below,above,not,in,not-in",
	"code" : "text,below,above,not,in,not-in",
	"encounter" : "text,below,above,not,in,not-in",
	"item-date" : "eq,ne,gt,lt,ge,le",
	"name" : "exact,contains",
	"date" :"eq,ne,gt,lt,ge,le",
	"created" : "eq,ne,gt,lt,ge,le",
	"period" : "eq,ne,gt,lt,ge,le",
	"performer" : "text,below,above,not,in,not-in",
	"result" : "exact,contains",
	"location" :"exact,contains",
	"type" : "text,below,above,not,in,not-in",
	"location-period" :"eq,ne,gt,lt,ge,le",
	"relationship" : "exact,contains",
	"familyhistorycondition" : "text,below,above,not,in,not-in",
	"vaccine-type" : "text,below,above,not,in,not-in",
	"notgiven" : "exact,contains",
	"lot-number" : "eq,ne,gt,lt,ge,le",
	"requester" : "text,below,above,not,in,not-in",
	"value-concept" : "text,below,above,not,in,not-in",
	"value-quantity" : "eq,ne,gt,lt,ge,le",
	"code-value[x]" : "eq,ne,gt,lt,ge,le",
	"form" : "text,below,above,not,in,not-in",
	"ingredient" : "text,below,above,not,in,not-in",
	"effectivedate" :"eq,ne,gt,lt,ge,le",
	"medication" : "text,below,above,not,in,not-in",
	"effectivetime" :"eq,ne,gt,lt,ge,le",
	"practitioner" : "exact,contains",
	"prescription" : "exact,contains",
	"family" : "exact,contains",
	"given" : "exact,contains",
	"language" : "exact,contains",
	"telecom" : "exact,contains",
	"gender" : "exact,contains,not,missing",
	"birthdate" :"eq,ne,gt,lt,ge,le",
	"city" : "exact,contains",
	"postalcode" : "exact,contains",
	"state" : "exact,contains",
	"mothersMaidenName" : "exact,contains",
	"age" : "eq,ne,gt,lt,ge,le",
	"race" : "exact,contains",
	"ethnicity" : "exact,contains",
	"date-Asserted" :"eq,ne,gt,lt,ge,le",
	"empty-reason" : "exact,contains",
}*/