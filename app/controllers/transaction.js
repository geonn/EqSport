var todayDate = new Date().getDate();
var todayMonth = new Date().getMonth()+1;
var todayYear = new Date().getFullYear();

var toDisplay = todayDate.toString() + "/" + todayMonth.toString() + "/" + todayYear.toString();

$.date.text = toDisplay;

// $.picker.minDate = new Date(2009,0,1);
// $.picker.maxDate = new Date();
// $.picker.value = new Date();

function back()
{
	// $.picker1.removeEventListener('change',venue);
	// $.picker2.removeEventListener('change',raceNo);
	// $.picker3.removeEventListener('change',pool);
	// $.picker4.removeEventListener('change',runner);
	//$.picker.removeEventListener('change',transaction);
	
	DRAWER.navigation("member");
}

//$.picker.addEventListener('change',transaction);

// function transaction(e)
// {
	// value = e.value;
	// console.log(value);
// 	
	// /*	for(var i=0, i<array[index].length, i++)
		// {
// 			
		// }
	// */
// }

function showDate(){
	$.dateView.height = 285;
	$.pickerView.show();
}

function displayDate(day,month,year){
	var string = day + "/" + month + "/" + year;
	$.date.text = string;
}

function done(){
	$.pickerView.hide();
	$.dateView.height = 70;
	var value = $.picker.value;
	var dayInt = value.getDate();
	var monthInt = value.getMonth()+1;
	var yearInt = value.getFullYear() ;
	
	var day = dayInt.toString();
	var month = monthInt.toString();
	var year = yearInt.toString();
	
	displayDate(day,month,year);
}