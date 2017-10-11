function nAm3() {
 var price; 
                var taxRate = 0.088; 

                if (drink == "espresso") 
                {
                    price = 1.40; 
                }

                if (drink == "latte" || drink == "cappuccino") 
                { 
                    if (ounce == 8) <!-- small -->
                    {
                        price = 1.95;
                    }
                    if (ounce == 12) <!-- medium -->
                    {
                        price = 2.35;
                    }
                    if (ounce == 16) <!-- large -->
                    {
                        price = 2.75;
                    }
                } 

                if (drink == "Americano") 
                {
                    price = 1.20 + .30 * (ounce/8);
                }

                price = price + (shots - 1) * .50; 
                price = price + price * taxRate; 
                document.forms[0].price.value = "$" + Math.round( price * 100 )
}