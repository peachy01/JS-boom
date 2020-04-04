var principal;
var time;
var data = [
    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
  ];
 
  function interestCalculator(principal, time){
      let rates = [];
      if( principal >= 2500 && (time > 1 && time < 3)) {
        rates = "3";
      } else if (principal >= 2500 && (time >= 3)){
        rates = "4";
      } else if (principal < 2500 || (time <= 1)){
        rates = "2";
      }
      else{
        rates = "1";  
      }
      return rates;
 }

 function OutputResult (data){
    let interestData = [];
    data.forEach(object => {
        rates = interestCalculator(object.principal, object.time);
        let interest = (object.principal* object.time * rates)/ 100; //declare the formula for interest
        interestData.push(
            {principal: object.principal, time: object.time, rates: rates, interest:interest}
        ); // how it will display the results
    });
    console.log(interestData);
    return interestData;//return the result that contains the objects
}
OutputResult(data);







