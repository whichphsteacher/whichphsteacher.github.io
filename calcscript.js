function GetQueryVariable(variable)
{
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return pair[1];}
   }
   return(false);
}

function GetIntFromAgreement(src)
{
	if (src == "Agree") {
		return(1);
	}
	else if (src == "Disagree") {
		return(-1);
	}
	else {
		return(0);
	}
}

function calcs() {

	var q1 = GetIntFromAgreement(GetQueryVariable("question1"));
	var q2 = GetIntFromAgreement(GetQueryVariable("question2"));
	var q3 = GetIntFromAgreement(GetQueryVariable("question3"));
	var q4 = GetIntFromAgreement(GetQueryVariable("question4"));
	var q5 = GetIntFromAgreement(GetQueryVariable("question5"));
	var q6 = GetIntFromAgreement(GetQueryVariable("question6"));
	var q7 = GetIntFromAgreement(GetQueryVariable("question7"));
	var q8 = GetIntFromAgreement(GetQueryVariable("question8"));
	var q9 = GetIntFromAgreement(GetQueryVariable("question9"));
	var q10 = GetIntFromAgreement(GetQueryVariable("question10"));
	var q11 = GetIntFromAgreement(GetQueryVariable("question11"));
	var q12 = GetIntFromAgreement(GetQueryVariable("question12"));
	var q13 = GetIntFromAgreement(GetQueryVariable("question13"));
	var q14 = GetIntFromAgreement(GetQueryVariable("question14"));
	var q15 = GetIntFromAgreement(GetQueryVariable("question15"));
	var q16 = GetIntFromAgreement(GetQueryVariable("question16"));
	var q17 = GetIntFromAgreement(GetQueryVariable("question17"));
	var q18 = GetIntFromAgreement(GetQueryVariable("question18"));
	var q19 = GetIntFromAgreement(GetQueryVariable("question19"));
	var q20 = GetIntFromAgreement(GetQueryVariable("question20"));
	var q21 = GetIntFromAgreement(GetQueryVariable("question21"));
	var q22 = GetIntFromAgreement(GetQueryVariable("question22"));
	var q23 = GetIntFromAgreement(GetQueryVariable("question23"));
	var q24 = GetIntFromAgreement(GetQueryVariable("question24"));
	var q25 = GetIntFromAgreement(GetQueryVariable("question25"));
	var q26 = GetIntFromAgreement(GetQueryVariable("question26"));

	var marva = q1 + q3 + q4 + (-q5) + q6 + q7 + (-q13) + (2 * q15) + (-q16) + (q17) + (2 * q19) + q20 + (-q21) + (-q24) + q26 + q27 + (-q28);
	var vincent = 0;
	var potter = (-q1) + q3 + 6 + (2 * q7) + (-q8) + q9 + (-q10) + (2 * -q13) + q15 + (-q16) + (2 * q17) + (-q18) + q20 + (-2 * q21) + q22 + (3 * q24) + q25 + q26 + q27 + (-q28);
	var tracey = q1 + q4 + q6 + q9 + q11 + q15 + q20 + (-q21) + (3 * q22) + (-q23) + (-q23) + q27 + (-q28);
	var giannoulis = (2 * q2) + (-q4) + (-q5) + (-q7) + q8 + (2 * q9) + (-q10) + q11 + q13 + q16 + (-q18) + (-q20) + q21 + (-2 * q23) + q24 + q27 + q28;
	var englishdept = (2 * q1) + (-q5) + q9 + (-q13) + q14 + (-q16) + q17 + q19 + q20 + (-2 * q21) + (-q24) + (-2 *q28);
	var staurs = q4 + q6 + q8 + q10 + (5 * q12) + q14 + (-q24) + q25 + (-q27) + (-q28);
	var altmeyer = (-q3) + (-q4) + (-q5) + (-q7) + q11 + (2 * q13) + q16 + (2 * q17) + q18 + q24 + (-q26) + q28;
	var church = q1 + (-q5) + (-2 * q9) + (-q11) + (2 * q14) + (-2 * q18) + q20 + (-q23) + (2 * q25) + (-q28);

	var result = Math.max(marva, altmeyer, potter, vincent, tracey, giannoulis, englishdept, staurs);

	//var a1 = '<a href="';
	//var a2 = '">See My Results &nbsp;&nbsp;&rsaquo;</a>';
	var a15 = '';

	if (result == marva) {
		a15 = "marva.html";
	}
	else if (result == altmeyer) {
		a15 = "altemeyer.html";
	}
	else if (result == vincent) {
		a15 = "vincent.html";
	}
	else if (result == tracey) {
		a15 = "harrill.html";
	}
	else if (result == potter) {
		a15 = "potter.html";
	}
	else if (result == giannoulis) {
		a15 = "giannoulis.html";
	}
	else if (result == englishdept) {
		a15 = "englishdept.html";
	}
	else if (result == staurs) {
		a15 = "staurs.html";
	}
	/*
	else if (result == church) {
		a15 = "church.html";
	}
	*/

	window.location.href = "./" + a15;

	console.log(String(q1));
	console.log(String(q2));
	console.log(String(q3));
	console.log(String(q4));
	console.log(String(q5));
	console.log(String(q6));
	console.log(String(q7));
	console.log(String(q8));
	console.log(String(q9));
	console.log(String(q10));
	console.log(String(q11));
	console.log(String(q12));
	console.log(String(q13));
	console.log(String(q14));
	console.log(String(q15));
	console.log(String(q16));
	console.log(String(q17));
	console.log(String(q18));
	console.log(String(q19));
	console.log(String(q20));
	console.log(String(q21));
	console.log(String(q22));
	console.log(String(q24));
	console.log(String(q25));
	console.log(String(q26));
	console.log('\n\n\n');
	console.log(marva);
	console.log(vincent);
	console.log(tracey);
	console.log(giannoulis);
	console.log(englishdept);

	//$('#sig2').append(a1 + a15 + a2);

	return(false);
}