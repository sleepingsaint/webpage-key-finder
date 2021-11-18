const check_btn = document.getElementById("check-shortlist");

// add roll numbers and names
const data = {}

// adding event listener
check_btn.addEventListener('click', async () => {
	let [tab] = await chrome.tabs.query({
		active: true,
		currentWindow: true,
	});

	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: checkShortlist,
		args: [data]
	});
});

// defining the function
function checkShortlist(data) {
	const roll_nums = Object.keys(data);
	let selected = [];
	roll_nums.forEach((value) => {
		if (window.find(value)) {
			selected.push(data[value]);
		}
	});

	alert(`${selected.length} ${selected.join(', ')}`);
}
