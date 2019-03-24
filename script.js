

// (function(w,d,s,l){
//     w[l]=w[l]||[];
//     w[l].push({
//         'start':new Date().getTime(),
//         'uno':'field'
//     });
//     var f=d.getElementsByTagName(s)[0],
//         j=d.createElement(s),
//         dl=l!='miForm'?'&l='+l:'';
//         j.async=true;
// })
// (window,document,'script','miForm');

// var form = new Array();
// form.field1 = [];


// myCar.model = "Mustang";
// myCar.year = 1969;

// var my = [
//     "field1", {
//         "id": {
//             "visibile": valido_o_no
//         }
//     }
    
// ];
// for(i=0; i<5; i++) {
//     window.form.field1.push({"invisible":0});
// }

var showHide = function (elem) {
    document.getElementById('attendee_container').style.display = 'block';
    var elements = document.querySelectorAll(".wrap");
    // it worksss
    Array.from(elements).forEach(function(element,i) {
        
        if (i >= elem.selectedIndex) {
            element.classList.add('d-none');
            element.classList.remove('d-block');
            // form.field1[i] ? form.field1[i].push({"invisible":0}) : form.field1.push({"invisible":1})
            
        } else {
            element.classList.remove('d-none');
            element.classList.add('d-block');
            // form.field1[i] ? form.field1[i].push({"invisible":1}) : form.field1.push({"invisible":0});
            // window.form.field1[i].push({'visible':0});
            // form.field_1 = {};
        }
    });
    testAnim('bounceInDown');
}


document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM completamente caricato e analizzato");

    var glInput = document.querySelectorAll('#attendee_container input');
    console.log(glInput);
    Array.from(glInput).forEach(function(el) {
        el.addEventListener('click', function () {
            // check if all visilble inputs are not empty
            var visibleInputs = document.querySelectorAll('.d-block input');
            console.log(visibleInputs);
            
            Array.from(visibleInputs).forEach(function(al,i) {
                
                // var validInputsCheck = function (e) {
                el.addEventListener('keyup', function () {
                    console.log(al.value);
                    console.log(i);

                    if (al.value != "") {
                        try {
                            al.classList.add('valid');
                            al.classList.remove('invalid');
                        }catch(w){}
                    } else {
                        try {
                            al.classList.add('invalid');
                            al.classList.remove('valid');
                        }catch(e){}
                    }

                    // valid == visible ??
                    var visible = document.querySelectorAll('.wrap.d-block');
                    var valid = document.querySelectorAll('.d-block .valid');
                    if (valid.length == visible.length){
                        document.querySelector('#step1_result').classList.add('d-block');
                        document.getElementById('step_2').disabled = false;
                    }else {
                        document.querySelector('#step1_result').classList.remove('d-block');
                        document.getElementById('step_2').disabled = true;
                    }
                });

            });

            
        });
    });

    // step_2 check
    // prima parte
    var radios = document.querySelectorAll('#company_name_toggle_on,#company_name_toggle_off');
    console.log(radios);
    Array.from(radios).forEach(function(el) {
        el.addEventListener('click', function () {
    
            el.checked ? document.getElementById('company_name_wrap').style.display = 'block' : document.getElementById('company_name_wrap').style.display = 'none';
            

        });
    });
    // seconda parte radios
    var radios2 = document.querySelectorAll('#special_accommodations_toggle_on,#special_accommodations_toggle_off');
    console.log(radios2);
    Array.from(radios).forEach(function(el) {
        el.addEventListener('click', function () {
            
            if (el.checked) {
                var inputvalid = document.getElementById('company_name');
                if (inputvalid.value != "") {
                    document.getElementById('step_3').disabled = false;
                } else {
                    document.getElementById('step_3').disabled = true;   
                }
            }

        });
    });
});



function testAnim(x) {
    var attendee = document.getElementById('attendee_container');
    attendee.className = '';
    attendee.classList.add(x,'animated');
    setTimeout(function() {
        attendee.className = '';
    }, 1000);
}
