
document.addEventListener("DOMContentLoaded",() =>{
    document.querySelector('#formex').onsubmit = () => {
        var myHeaders = new Headers();
        myHeaders.append("apikey", "CGDSy7itQWqchmRRtYi4jT8KG822U3Ne");
        
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
        };
        
        fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=thb&base=eur", requestOptions)
        .then(response => response.json())
        .then(result => {
            const rate = result.rates.THB;
            document.querySelector("#rate").innerHTML = `1 EUR = ${rate.toFixed(2)} baht`;
            let bath = document.querySelector("#thaibath").value;

            function convert () {
                return bath / rate;
            }
            document.querySelector("#euro").value = `${convert().toFixed(2)}`;
        })
          .catch(error => console.log('error', error));
          return false; 
    };
});



