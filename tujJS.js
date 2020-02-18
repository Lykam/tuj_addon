window.addEventListener ("load", myMain, false);


function myMain (evt) {
	var tables = document.getElementsByClassName("category category-items");

	for (var i=0; i<tables.length; i++) { //for each table
		let table = tables[i];
		let column_total = table.rows[2].cells.length;
		let row_total = table.rows.length;
		if (column_total == 6) { //that has a materials column
			table.rows[0].cells[0].colSpan = 8;
			let header_row = table.rows[2];
			header_row.insertCell(6).outerHTML = '<th class="price sortable">Profit</th>';
			for(var r=3; r<row_total; r++) {
				let item_row = table.rows[r];
				let current_text = item_row.cells[3].textContent;
				let materials_text = item_row.cells[4].textContent;
				let current = parseInt(current_text, 10);
				let materials = parseInt(materials_text, 10);
				let profit = current - materials;
				 //calculate the profit from the current price and materials column
				if (profit>0) { //make it pretty
					item_row.insertCell(7).outerHTML = '<td class="price"><span class="price money-gold" style="color: green;">'+profit+'</span></td>';
				} else {
					item_row.insertCell(7).outerHTML = '<td class="price"><span class="price money-gold" style="color: red;">'+profit+'</span></td>';
				}
			}
		}
	}
}

setInterval(myMain, 1000); //setInterval time parameter; 1000 = 1 second
//setInterval instead of setTimeout will apply script when reloading the page.
