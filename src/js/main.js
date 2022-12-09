/* import { menuButton } from "./modules/menu";
import {popup} from './modules/modal'
import {advantages} from './modules/advantages'
import {exchange} from './modules/exchange' */

const navigationLinks=document.querySelectorAll('.navigation__link')

const calcElems=document.querySelectorAll(".calc")

//ausn
const ausn=document.querySelector('.ausn')
const formAusn=ausn.querySelector('.calc__form')
const resultTaxTotal=ausn.querySelector('.result__tax-total')
const calcLabelExpenses=ausn.querySelector('.calc__label-expenses')


//npd

const selfEmployment=document.querySelector('.self-employment')
const formSelfEmloyment=selfEmployment.querySelector('.calc__form')
const resultTaxTotalSE=selfEmployment.querySelector('.result__tax')

console.log(navigationLinks)
console.log(formSelfEmloyment)

navigationLinks.forEach(link=>{
	link.addEventListener('click',e=>{
		e.preventDefault()
		navigationLinks.forEach(link=>{
			link.classList.remove('navigation__link_active')
		})
		link.classList.add('navigation__link_active')
		calcElems.forEach(calc=>{
			if(calc.dataset.tax===link.dataset.tax){
				calc.classList.add('calc_active')
			}else{
				calc.classList.remove('calc_active')
			}
		})
	})
})

formAusn.addEventListener('input',()=>{
	if (formAusn.type.value==='income'){
		console.log('income', formAusn.income.value * 0.08)
		calcLabelExpenses.style.display="none"
		resultTaxTotal.textContent=formAusn.income.value*0.08
	}
	if (formAusn.type.value==='expenses'){
		console.log('expenses',(formAusn.income.value - formAusn.expenses.value)* 0.2)
		calcLabelExpenses.style.display="block"
		resultTaxTotal.textContent=(formAusn.income.value-formAusn.expenses.value)*0.2
	}
})

formSelfEmloyment.addEventListener('input',()=>{
	//e.preventDefault();
	const resIndividual=formSelfEmloyment.individual.value*0.04
	console.log(resIndividual)
})

//# sourceMappingURL=main.js.map
