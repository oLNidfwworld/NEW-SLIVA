import createSwitch,{ deleteSwitch } from 'switch-button';
import 'switch-button/dist/index.css';
export function  initSwitches(){
    const switchers = document.querySelectorAll('.switch');
    switchers.forEach((el)=>{
        let $switch = createSwitch(el, {
            onChange: (checked) => {
                console.log('checked', checked)
            },
        })
    })
}