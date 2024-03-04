const fromDropDown = document.getElementById('fromCurrancy');
const toDropDown = document.getElementById('toCurrancy');
const inputNum = document.getElementById('amount');
const convertBtn = document.getElementById('convert-btn');

const apiKey = "4fd699a2cb658131e6cf17e0";

const currancyCodes = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", 
                    "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC",
                    "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS", 
                    "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP",
                    "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD",
                    "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", 
                    "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", 
                    "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY",
                        "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF",
                        "YER", "ZAR", "ZMW", "ZWL"]


const getCurrancy = async()=>{
    try{
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/INR`);
        const data = await res.json();
        console.log(data.conversion_rates);
    }catch(error){
         console.log("error fetching currancy :",error );
    }
}
getCurrancy();

currancyCodes.forEach((currancy)=>{
    let option = document.createElement('option');
    option.value = currancy;
    option.text= currancy;
    fromDropDown.add(option);
});

currancyCodes.forEach((currancy)=>{
    let option = document.createElement('option');
    option.value = currancy;
    option.text= currancy;
    toDropDown.add(option);
});