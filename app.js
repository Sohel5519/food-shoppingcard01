

//==== FOR INCREAMENT ====
/*let total_amo =document.getElementById("total_amount");
let charge =document.getElementById("charge");
let total_podat_amount =document.getElementById("total_podat_amount");
let cupon_box = document.getElementById("cupon-box").style.display = "none";





function increament(inc_dec,burger_price,total_bur_pri){
let burger_inc = document.getElementById(inc_dec);
let burger_prices =document.getElementById(burger_price);
let total_bur_pric =document.getElementById(total_bur_pri);
let total_amo =document.getElementById("total_amount");



if(burger_inc.value >= 5){

    burger_inc.value = 5;
    alert("Maximum 5 Product Purchase");

}else{
    burger_inc.value ++ ;

    let total_burger_pri = parseFloat(total_bur_pric.innerHTML) + parseFloat(burger_prices.innerHTML);
    document.getElementById(total_bur_pri).innerHTML = total_burger_pri;

    //TOTAL BURGER AMOUNT
    let total_mm =parseFloat(total_amo.innerHTML) + parseFloat(burger_prices.innerHTML) ;
    document.getElementById("total_amount").innerHTML =total_mm;

    //CHARGE
    let totaol_charge = parseFloat(charge.innerHTML) + total_mm;
    document.getElementById("total_podat_amount").innerHTML =totaol_charge;

    //TOTAL AMOUNT

    if(document.getElementById("total_podat_amount").innerHTML >= 1000){
        document.getElementById("cupon-box").style.display = "block";

    }

   
}
}


//===FOR DECREMENT====

function decrement(inc_dec,burger_price,total_bur_pri){
    let burger_inc = document.getElementById(inc_dec);
    let burger_prices =document.getElementById(burger_price);
    let total_bur_pric =document.getElementById(total_bur_pri);
    
    if(burger_inc.value <= 0){
    
        burger_inc.value = 0;
        alert("Minimum 1 Product Purchase");

    
    }else{
        burger_inc.value -- ;
        let total_burger_pri = parseFloat(total_bur_pric.innerHTML) - parseFloat(burger_prices.innerHTML);
        document.getElementById(total_bur_pri).innerHTML = total_burger_pri;

        //===FOR DECREMENT====
        let total_mm =parseFloat(total_amo.innerHTML) - parseFloat(burger_prices.innerHTML) ;
        document.getElementById("total_amount").innerHTML =total_mm;
        
        //CHARGE
        let totaol_charge = total_mm - parseFloat(charge.innerHTML) ;
        document.getElementById("total_podat_amount").innerHTML =totaol_charge;

        if(document.getElementById("total_amount").innerHTML== 0){
            document.getElementById("total_podat_amount").innerHTML= 0;

        }
        
        if (document.getElementById("total_podat_amount").innerHTML < 1000){
            document.getElementById("cupon-box").style.display = "none";
        }

        
    }
    }*/


    //==== FOR INCREAMENT ====
    let product_amounts = document.getElementById('product_amount');
    let charges = document.getElementById('charge');
    let tolatl_pro_amounts = document.getElementById('tolatl_pro_amount');
    let cupon_boxs = document.getElementById('cupon_box').style.display="none";
    


   function increament(count,br_price,to_br_price){

    let coults = document.getElementById(count);
    let br_prices = document.getElementById(br_price);
    let to_br_prices = document.getElementById(to_br_price);
    
   

    if(coults.value >= 5){
        coults.value = 5;
        alert("maximum 5 product prachase");

    }else{
        coults.value ++;

        // BURGER-AMOUNT
        let burger_to_price = parseFloat(to_br_prices.innerHTML) + parseFloat(br_prices.innerHTML);
        to_br_prices.innerHTML= burger_to_price;

        // TOTAL-AMOUNT

        let total_amo = parseFloat(product_amounts.innerHTML) + parseFloat(br_prices.innerHTML);
        document.getElementById('product_amount').innerHTML = total_amo;

        // TOTAL-AMOUNT

        let add_chage = parseFloat(product_amounts.innerHTML) + parseFloat(charges.innerHTML);
        document.getElementById('tolatl_pro_amount').innerHTML = add_chage;

        if(document.getElementById('tolatl_pro_amount').innerHTML >= 1000){
            document.getElementById('cupon_box').style.display="block";
        }


        
    }
   }



   //==== FOR DECREMENT ====

   function decrement(count,br_price,to_br_price){

    let coults = document.getElementById(count);
    let br_prices = document.getElementById(br_price);
    let to_br_prices = document.getElementById(to_br_price);
    let product_amounts = document.getElementById('product_amount');


    if(coults.value <= 0){
        coults.value = 0;
        alert("minimum 1 product prachase");

    }else{
        coults.value --;

        // BURGER-AMOUNT
        let burger_to_price = parseFloat(to_br_prices.innerHTML) - parseFloat(br_prices.innerHTML);
        to_br_prices.innerHTML= burger_to_price;

        // TOTAL-AMOUNT

        let total_amo = parseFloat(product_amounts.innerHTML) - parseFloat(br_prices.innerHTML);
        document.getElementById('product_amount').innerHTML = total_amo;

        // TOTAL-AMOUNT
        
        let add_chage = parseFloat(product_amounts.innerHTML) - parseFloat(charges.innerHTML);
        document.getElementById('tolatl_pro_amount').innerHTML = add_chage;


        if(document.getElementById('product_amount').innerHTML== 0){
            document.getElementById('tolatl_pro_amount').innerHTML = 0;
        }

        if(document.getElementById('tolatl_pro_amount').innerHTML <= 1000){
            document.getElementById('cupon_box').style.display="none";
        }
    }
   }
   
