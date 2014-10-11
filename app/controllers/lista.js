
var singleValue = ['id', 'fullName'];

var multiValue = ['email', 'phone'];

var people = Ti.Contacts.getAllPeople();

for (var i=0, ilen=people.length; i<ilen; i++){
	var person = people[i];
	
	if (JSON.stringify(person[multiValue[1]]) != '{}'){
		if (JSON.stringify(person[multiValue[0]]) != '{}'){
			Ti.API.info('phone:' + JSON.stringify(person[multiValue[1]]));
		
			var newContact = Ti.UI.createTableViewRow();
			
			var vista = Ti.UI.createView({
				borderColor: "#afafaf",
				borderRadius: "5",
				height: "50",
				backgroundColor:'#e7e9e7',	
			});	
			
			var nombreContacto = Ti.UI.createLabel({
				text: person[singleValue[1]],
				left:'5%',
				color: '#000'
			});
			
			var check = Ti.UI.createSwitch({
				type: Titanium.UI.Android.SWITCH_STYLE_CHECKBOX,
				width: "45",
				height: "45",
				right: "3%",
				borderColor: "#afafaf",
				borderRadius: "5",
				//backgroundColor: "#fff",
				//color: "#fff",
				value: "false"
			});
			
			/*
			 check.addEventListener('change', function(e){
				Ti.API.info(check.value);
				if(check.value == true){
					check.backgroundColor = "#fff";
					check.color = "#fff";
				} else{
					check.backgroundColor = "#0071bc";
					check.color = "#0071bc";
				}	
			});
			
			*/
			
			vista.add(nombreContacto);
			vista.add(check);
			newContact.add(vista);
			$.contactList.appendRow(newContact);
		}
	}
};

$.ventana.open();

