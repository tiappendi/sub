function showHide (elem) {
    if(elem.selectedIndex != 0) {
        document.getElementById('attendee_container').style.display = 'block';
        var elements = document.querySelectorAll(".wrap");
        Array.from(elements).forEach(function(element,i) { 
            if (i >= elem.selectedIndex) {
                element.classList.add('d-none');
                element.classList.remove('d-block');                    
            } else {
                element.classList.remove('d-none');
                element.classList.add('d-block');
            }
        });
        testAnim('bounceInDown');
        validEqVisib();
    } else {
        document.getElementById('attendee_container').style.display = 'none';
    }
}
function testAnim(x) {
    // var attendee = document.getElementById('attendee_container');
    // document.querySelector('.collapsible').classList.toggle('collapsed');
    // attendee.className = '';
//     attendee.classList.add('collapsible');
//     setTimeout(function() {
//         attendee.className = '';
//     }, 1000);
}

function validEqVisib() {
    var visible = document.querySelectorAll('.wrap.d-block');
    var valid = document.querySelectorAll('.d-block .valid');
    if (valid.length == visible.length){
        document.querySelector('#step1_result').classList.add('d-block');
        document.getElementById('step_2').disabled = false;
    }else {
        document.querySelector('#step1_result').classList.remove('d-block');
        document.getElementById('step_2').disabled = true;
    }
}

function companyName() {
    var inputValid = document.getElementById('company_name');
    inputValid.value != "" ? document.getElementById('step_3').disabled = false : document.getElementById('step_3').disabled = true;
}

(function(){
    "use strict";
    document.addEventListener("DOMContentLoaded", function(event) {

        // document.getElementById('num_attendees').addEventListener('onchange', showHide(this));

        // field_1
        var glInput = document.querySelectorAll('#attendee_container input');
        Array.from(glInput).forEach(function(el) {
            el.addEventListener('click', function () {
                var visibleInputs = document.querySelectorAll('.d-block input');
                // check if all visilble inputs are not empty
                Array.from(visibleInputs).forEach(function(al,i) {
                    el.addEventListener('keyup', function () {
                        // console.log(al.value);
                        // console.log(i);
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
                        validEqVisib();
                    });
                });
            });
        });

        // step_2 part1
        var rad1_checked = 0;
        var radios = document.querySelectorAll('#company_name_toggle_on,#company_name_toggle_off');
        Array.from(radios).forEach(function(el) {
            el.addEventListener('click', function () {
                var rad1_checked = 0;
                if (el.checked) {
                    document.getElementById('company_name_wrap').style.display = 'block';
                    rad1_checked = 1;
                } else {
                    document.getElementById('company_name_wrap').style.display = 'none';
                    rad1_checked = 0;
                }
                companyName();
            });
        });
        
        // step_2 part2 radios
        var rad2_checked = 0;
        var radios2 = document.querySelectorAll('#special_accommodations_toggle_on,#special_accommodations_toggle_off');
        Array.from(radios2).forEach(function(el) {
            el.addEventListener('click', function () {
                if (el.checked) {
                    companyName();
                }
            });
        });
    
        var rock = document.getElementById('rock');
        rock.addEventListener('click', function(){
            rock.checked === true ? document.getElementById('submit_button').disabled = false : document.getElementById('submit_button').disabled = true;
        });

        document.getElementById('company_name').addEventListener('keyup', function () {
            var that = this;
            that.value != '' && rad1_checked && rad2_checked ? document.getElementById('step_3').disabled = false : document.getElementById('step_3').disabled = true;
        });

        function showHide (elem) {
            if(elem.selectedIndex != 0) {
                document.getElementById('attendee_container').style.display = 'block';
                var elements = document.querySelectorAll(".wrap");
                Array.from(elements).forEach(function(element,i) { 
                    if (i >= elem.selectedIndex) {
                        element.classList.add('d-none');
                        element.classList.remove('d-block');                    
                    } else {
                        element.classList.remove('d-none');
                        element.classList.add('d-block');
                    }
                });
                testAnim('bounceInDown');
                validEqVisib();
            } else {
                document.getElementById('attendee_container').style.display = 'none';
            }
        }     
    });
})();