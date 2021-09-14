const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

//the below line should always output the current DateTime in New Zealand, replace the argument with any epoch milliseconds and it should still always give you the correct time.
const UTCFromMS = (ms) => {
  return new Date(new Date(ms).toUTCString().replace(" GMT", ""))
};

const addHours = (dte, hrs) => {
		return new Date(
			dte.getFullYear(),
			dte.getMonth(),
			dte.getDate(),
			dte.getHours() + hrs,
			dte.getMinutes(),
			dte.getMilliseconds()
		);
};

const toNewZealand = (ms) => {
		return addNewZealandDaylightSavings(UTCFromMS(ms));
};

const getPreviousSunday = (dte) => {
	return new Date(
		dte.getFullYear(),
		dte.getMonth(),
		dte.getDate() - dte.getDay(),
		1,
		0,
		0
	);
};

const getNextSunday = (dte) => {
	return new Date(
		dte.getFullYear(),
		dte.getMonth(),
		dte.getDay() === 0 ? dte.getDate() : dte.getDate() + (7 - dte.getDay()),
		1,
		0,
		0
	)
};

const standardHours = 12;
const daylightHours = 13;
const addNewZealandDaylightSavings = (dte) => {
	const lastSundaySeptember = getPreviousSunday(
		new Date(dte.getFullYear(), 8, 30)
	);

	const firstSundayApril = getNextSunday(
			new Date(dte.getFullYear(), 3, 1)
	);

	// If its before firstSundayApril, add 13, if we went over 1am, add 12.
	if(dte <= firstSundayApril) {
		const daylightNz = addHours(dte, daylightHours);
		if(daylightNz >= firstSundayApril) {
			return addHours(dte, standardHours);
		}
		return daylightNz
	}

	// if its before lastSundaySeptember, add 12 if we went over 1am add 13.
	if(dte <= lastSundaySeptember) {
		const standardNz = addHours(dte, standardHours);
		if(standardNz >= lastSundaySeptember) {
			return addHours(dte, daylightHours);
		}
		return standardNz;
	}
	return addHours(dte, daylightHours);
};

const readme = `\
### Hi there 👋
I'm Jacqui, living and working in Auckland, New Zealand.
- ☕ I’m currently working at Online Republic, a global travel e-commerce group operating online price comparison and booking services, is acquired by Australasia’s largest online travel agency: Webjet Limited.
- 💻 Working: build a cloud data analytics infrastructure, using AWS, Snowflake, Terraform, DBT etc
- 🌱 My blog: https://jacquiwu.com/
- 📫 How to reach me: 
     - [LinkedIn](https://www.linkedin.com/in/jacqui-wu/) 
     - [Twitter](https://twitter.com/AklJacqui)
---
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

⏰ Updated on ${toNewZealand(new Date().getTime()).toString()}\


---
<a href="https://www.buymeacoffee.com/jacquiwuc"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=jacquiwuc&button_colour=b2f0ec&font_colour=000000&font_family=Bree&outline_colour=000000&coffee_colour=FFDD00"></a>

`
console.log(readme)
