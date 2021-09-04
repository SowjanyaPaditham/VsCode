import { LightningElement } from 'lwc';

export default class SimpleLwc extends LightningElement {
    name='Sowjanya'
    connectedCallback(){
        console.log('connectedCallback')
    }
}