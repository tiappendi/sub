function showHide (elem) {
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
};

function testAnim(x) {
    var attendee = document.getElementById('attendee_container');
    attendee.className = '';
    attendee.classList.add(x,'animated');
    setTimeout(function() {
        attendee.className = '';
    }, 1000);
}
////////////////////////////////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", function(event) {

    console.log("DOM completamente caricato e analizzato");

    // field_1
    var glInput = document.querySelectorAll('#attendee_container input');
    //console.log(glInput);

    Array.from(glInput).forEach(function(el) {
        el.addEventListener('click', function () {

            var visibleInputs = document.querySelectorAll('.d-block input');
            console.log(visibleInputs);
            
            // check if all visilble inputs are not empty
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
                // }

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
    Array.from(radios2).forEach(function(el) {
        el.addEventListener('click', function () {
            if (el.checked) {
                var inputValid = document.getElementById('company_name');
                if (inputValid.value != "") {
                    document.getElementById('step_3').disabled = false;
                } else {
                    document.getElementById('step_3').disabled = true;   
                }
            }

        });
    });

    var rock = document.getElementById('rock');
    rock.addEventListener('click', function(){
        rock.checked === true ? document.getElementById('submit_button').disabled = false : document.getElementById('submit_button').disabled = true
    });
});




