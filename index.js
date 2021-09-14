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


const readme = `\
### Hi there 👋
I'm Jacqui, living and working in Auckland, New Zealand.
- ☕ I’m currently working at Online Republic, a global travel e-commerce group operating online price comparison and booking services, is acquired by Australasia’s largest online travel agency: Webjet Limited.
- 💻 Working: build a cloud data analytics infrastructure, using AWS, Snowflake, Terraform, DBT etc
- 🌱 My blog: https://jacquiwu.com/
- 📫 How to reach me: 
     - [LinkedIn](https://www.linkedin.com/in/jacqui-wu/) 
     - [Twitter](https://twitter.com/AklJacqui)

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}
![Progress Bar CI](https://github.com/jacquiwuc/jacquiwuc/workflows/Progress%20Bar%20CI/badge.svg)

<a href="https://www.buymeacoffee.com/jacquiwuc"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=jacquiwuc&button_colour=b2f0ec&font_colour=000000&font_family=Bree&outline_colour=000000&coffee_colour=FFDD00"></a>\
`
console.log(readme)
