import _ from "lodash";

export function createChart() {
 
const ctx = document.getElementById("myChart");

const set = new Set();
const demo = ['Red','Blue','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

demo.forEach(data => set.add(data));

new Chart(ctx,{
  type:"bar",
  data:{
    labels: Array.from(set),
    datasets:[{
      label:'# of votes',
      data:[12,19,5,2,3],
      borderWidth:1
    }]
  },
  options:{
    scales:{
      y:{
        beginAtZero:true
      }
    }
  }
})


}

