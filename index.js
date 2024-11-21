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
I'm Jacqui, a Data Engineer living and working in Auckland, New Zealand.
- ☕ I’m currently working in banking as a data engineer.
- 💻 Current stack: Big Data stack, e.g., Hadoop, Hive, Python, Scala, Spark, Airflow etc
- 💻 Previous project: build a cloud data analytics infrastructure, using AWS, Snowflake, Terraform, DBT etc
- 📫 How to reach me: 
     - [LinkedIn](https://www.linkedin.com/in/jacqui-wu/) 
 

---
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

⏰ Updated on ${new Date().toUTCString()}

`
console.log(readme)
