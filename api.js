fetch("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817")
.then(res => res.json())
.then(data => console.log(data))



fetch("employees.json")
.then(function(response){
	return response.json();
})
.then(function(employees){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let employee of employees){
		out += `
			<tr>
            <td>${employee.name} </td>
                <td>${employee.office}</td>
                <td>${employee.position}</td> 
                <td>${employee.salary}</td> 
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});

