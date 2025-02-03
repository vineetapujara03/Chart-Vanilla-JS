import './style.css'

import { createChart } from './counter.js'

document.querySelector('#app').innerHTML = `
 <canvas id="myChart"></canvas> 
`

createChart();