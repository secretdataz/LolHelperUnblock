const regionUrls = {
    th: 'http://lolhelperth.garenanow.com',
    sg: 'http://lolhelpersg.garenanow.com',
    vn: 'http://lolhelpervn.garenanow.com',
    ph: 'http://lolhelperph.garenanow.com',
    id: 'http://lolhelperid.garenanow.com'
}

function updateStuffs(newRegion) {
	let btn = document.getElementById('launchBtn');
	let sel = document.getElementById('regionSel');
	
	sel.value = newRegion;
	btn.href = regionUrls[newRegion];
}

document.addEventListener('DOMContentLoaded', function() {
	chromeCall(chrome.storage.sync, 'get', 'region')
		.then((data) => {
			if(data.region === undefined) {
				chromeCall(chrome.storage.sync, 'set', { region: 'th' });
				updateStuffs('th');
			}
			else {
				updateStuffs(data.region);
			}
		});
		
	document.getElementById('regionSel').addEventListener('change', function() {
		let newRegion = document.getElementById('regionSel').value;
		updateStuffs(newRegion);
		chromeCall(chrome.storage.sync, 'set', { region: newRegion });
	});
});
